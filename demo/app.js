const imageInput = document.querySelector("#imageInput");
const dropZone = document.querySelector("#dropZone");
const uploadMeta = document.querySelector("#uploadMeta");
const previewFrame = document.querySelector("#previewFrame");
const previewImage = document.querySelector("#previewImage");
const pairPreview = document.querySelector("#pairPreview");
const pairRemoteImage = document.querySelector("#pairRemoteImage");
const pairStreetImage = document.querySelector("#pairStreetImage");
const emptyPreview = document.querySelector("#emptyPreview");
const resultStatus = document.querySelector("#resultStatus");
const damageScore = document.querySelector("#damageScore");
const damageBar = document.querySelector("#damageBar");
const confidenceLabel = document.querySelector("#confidenceLabel");
const actionLabel = document.querySelector("#actionLabel");
const viewLabel = document.querySelector("#viewLabel");
const evidenceList = document.querySelector("#evidenceList");
const metricList = document.querySelector("#metricList");
const canvas = document.querySelector("#analysisCanvas");
const heroScore = document.querySelector("#heroScore");
const heroConfidence = document.querySelector("#heroConfidence");
const heroAction = document.querySelector("#heroAction");
const heroSignal = document.querySelector("#heroSignal");
const hotspots = document.querySelectorAll(".hotspot");
let currentPreviewUrl = null;

const ALTADENA_CASE = {
  id: "Altadena sample_00005",
  remoteImage: "./assets/altadena-sample-00005/remote_sensing.jpg",
  streetImage: "./assets/altadena-sample-00005/street_view.jpg",
  damage: 0.94,
  confidence: 0.91,
  action: "Immediate inspection",
  view: "Cross-view pair",
  signal: "Collapsed roof / fire loss",
  evidence: [
    "Cross-view agreement is strong: the overhead image shows a dark burn scar and a collapsed debris field at the target structure footprint.",
    "The street view confirms severe structural loss: the upper floor and roof are largely missing, with exposed and charred framing.",
    "Garage openings and front facade elements are visibly compromised, with heavy debris and burned material across the frontage.",
    "Damage class is best interpreted as Destroyed / severe structural damage rather than minor exterior scorching.",
    "Remaining uncertainty is parcel-boundary alignment and pre-event condition, but both sensors support urgent human review.",
  ],
  metrics: [
    ["Structural loss", 0.94],
    ["Roof collapse evidence", 0.96],
    ["Burn severity", 0.92],
    ["Sensor agreement", 0.89],
    ["Parcel-boundary confidence", 0.78],
  ],
};

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const percent = (value) => `${Math.round(clamp(value) * 100)}%`;

const singleImageStages = [
  "Reading image pixels",
  "Estimating visible damage cues",
  "Arbitrating confidence",
  "Packaging audit trail",
];

const pairStages = [
  "Reading paired imagery",
  "Aligning overhead and street evidence",
  "Reasoning over cross-view damage cues",
  "Packaging audit trail",
];

imageInput.addEventListener("change", (event) => {
  const [file] = event.target.files;
  if (file) {
    analyzeFile(file);
  }
});

dropZone.addEventListener("dragover", (event) => {
  event.preventDefault();
  dropZone.classList.add("is-dragover");
});

dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("is-dragover");
});

dropZone.addEventListener("drop", (event) => {
  event.preventDefault();
  dropZone.classList.remove("is-dragover");
  const [file] = event.dataTransfer.files;
  if (file && file.type.startsWith("image/")) {
    analyzeFile(file);
  }
});

document.querySelector("#loadAltadenaPair").addEventListener("click", () => {
  loadAltadenaPair();
});

document.querySelector("#loadStreetSample").addEventListener("click", () => {
  loadGeneratedSample("street");
});

document.querySelector("#loadRemoteSample").addEventListener("click", () => {
  loadGeneratedSample("remote");
});

function getSelectedMode() {
  return document.querySelector('input[name="imageMode"]:checked').value;
}

function setRunningStatus(stages = singleImageStages) {
  resultStatus.classList.remove("is-complete");
  resultStatus.classList.add("is-running");
  let index = 0;
  setStatusText(stages[index]);

  const timer = window.setInterval(() => {
    index += 1;
    if (index >= stages.length) {
      window.clearInterval(timer);
      return;
    }
    setStatusText(stages[index]);
  }, 360);

  return timer;
}

function setCompleteStatus() {
  resultStatus.classList.remove("is-running");
  resultStatus.classList.add("is-complete");
  setStatusText("Analysis complete");
}

function setStatusText(text) {
  let statusText = resultStatus.querySelector(".status-text");
  if (!statusText) {
    statusText = document.createElement("span");
    statusText.className = "status-text";
    resultStatus.append(statusText);
  }
  statusText.textContent = text;
}

function resetObjectUrl() {
  if (currentPreviewUrl) {
    URL.revokeObjectURL(currentPreviewUrl);
    currentPreviewUrl = null;
  }
}

function showSinglePreview(imageUrl) {
  previewFrame.classList.remove("is-pair");
  pairPreview.hidden = true;
  previewImage.src = imageUrl;
  previewImage.hidden = false;
  emptyPreview.hidden = true;
  hotspots.forEach((hotspot) => {
    hotspot.hidden = false;
  });
}

function showPairPreview() {
  resetObjectUrl();
  previewFrame.classList.add("is-pair");
  previewImage.hidden = true;
  emptyPreview.hidden = true;
  pairRemoteImage.src = ALTADENA_CASE.remoteImage;
  pairStreetImage.src = ALTADENA_CASE.streetImage;
  pairPreview.hidden = false;
  hotspots.forEach((hotspot) => {
    hotspot.hidden = false;
  });
}

function analyzeFile(file) {
  resetObjectUrl();
  const imageUrl = URL.createObjectURL(file);
  currentPreviewUrl = imageUrl;
  showSinglePreview(imageUrl);

  uploadMeta.replaceChildren();
  const fileName = document.createElement("span");
  const fileSize = document.createElement("span");
  fileName.textContent = file.name;
  fileSize.textContent = `${(file.size / 1024 / 1024).toFixed(2)} MB`;
  uploadMeta.append(fileName, fileSize);

  const timer = setRunningStatus();
  const image = new Image();
  image.onload = () => {
    window.setTimeout(() => {
      window.clearInterval(timer);
      const analysis = analyzeImage(image, getSelectedMode());
      renderAnalysis(analysis);
      setCompleteStatus();
    }, 1250);
  };
  image.src = imageUrl;
}

function loadAltadenaPair() {
  showPairPreview();
  uploadMeta.replaceChildren();
  const sampleName = document.createElement("span");
  const sampleMode = document.createElement("span");
  sampleName.textContent = ALTADENA_CASE.id;
  sampleMode.textContent = "Remote + street pair";
  uploadMeta.append(sampleName, sampleMode);

  const timer = setRunningStatus(pairStages);
  window.setTimeout(() => {
    window.clearInterval(timer);
    renderAnalysis(ALTADENA_CASE);
    setCompleteStatus();
    document.querySelector("#analysis").scrollIntoView({ behavior: "smooth", block: "start" });
  }, 1250);
}

function analyzeImage(image, selectedMode) {
  const context = canvas.getContext("2d", { willReadFrequently: true });
  const sampleWidth = 128;
  const sampleHeight = Math.max(64, Math.round((image.height / image.width) * sampleWidth));
  canvas.width = sampleWidth;
  canvas.height = sampleHeight;
  context.drawImage(image, 0, 0, sampleWidth, sampleHeight);

  const { data } = context.getImageData(0, 0, sampleWidth, sampleHeight);
  let brightness = 0;
  let saturation = 0;
  let darkPixels = 0;
  let warmPixels = 0;
  let greenPixels = 0;
  let blueGrayPixels = 0;
  const luminance = [];

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i] / 255;
    const g = data[i + 1] / 255;
    const b = data[i + 2] / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const luma = 0.299 * r + 0.587 * g + 0.114 * b;

    brightness += luma;
    saturation += max === 0 ? 0 : (max - min) / max;
    luminance.push(luma);

    if (luma < 0.28) darkPixels += 1;
    if (r > 0.44 && r > g * 1.12 && g > b * 0.9) warmPixels += 1;
    if (g > r * 1.08 && g > b * 1.08 && luma > 0.22) greenPixels += 1;
    if (Math.abs(r - g) < 0.08 && Math.abs(g - b) < 0.08 && luma > 0.42) {
      blueGrayPixels += 1;
    }
  }

  const pixels = data.length / 4;
  brightness /= pixels;
  saturation /= pixels;

  let edgeTotal = 0;
  let edgeCount = 0;
  for (let y = 1; y < sampleHeight; y += 1) {
    for (let x = 1; x < sampleWidth; x += 1) {
      const index = y * sampleWidth + x;
      const left = luminance[index - 1];
      const top = luminance[index - sampleWidth];
      edgeTotal += Math.abs(luminance[index] - left) + Math.abs(luminance[index] - top);
      edgeCount += 2;
    }
  }

  const edgeDensity = clamp(edgeTotal / edgeCount / 0.16);
  const darkCue = darkPixels / pixels;
  const warmCue = warmPixels / pixels;
  const vegetationCue = greenPixels / pixels;
  const roofCue = blueGrayPixels / pixels;
  const textureDisruption = clamp(edgeDensity * 0.66 + saturation * 0.24 + darkCue * 0.22);
  const autoMode =
    image.width / image.height > 1.45 || roofCue > vegetationCue + 0.08 || selectedMode === "remote"
      ? "remote"
      : "street";
  const mode = selectedMode === "auto" ? autoMode : selectedMode;

  const rawDamage =
    mode === "remote"
      ? textureDisruption * 0.36 + darkCue * 0.28 + warmCue * 1.55 + (1 - brightness) * 0.18
      : textureDisruption * 0.42 + darkCue * 0.22 + warmCue * 1.35 + saturation * 0.14;

  const damage = clamp(rawDamage, 0.06, 0.94);
  const confidence = clamp(
    0.48 +
      Math.min(image.width * image.height, 1200 * 900) / (1200 * 900) * 0.2 +
      Math.abs(damage - 0.5) * 0.32 +
      (edgeDensity > 0.18 ? 0.08 : -0.04),
    0.36,
    0.93,
  );

  return {
    mode,
    damage,
    confidence,
    action: actionText(damage),
    view: mode === "remote" ? "Remote sensing" : "Street view",
    signal: mode === "remote" ? "Roof / terrain" : vegetationCue > 0.18 ? "Occlusion" : "Facade / debris",
    evidence: buildEvidence({
      mode,
      damage,
      confidence,
      brightness,
      darkCue,
      warmCue,
      vegetationCue,
      roofCue,
      edgeDensity,
      textureDisruption,
    }),
    metrics: [
      ["Texture disruption", textureDisruption],
      ["Dark / shadow cue", darkCue],
      ["Debris / fire color cue", clamp(warmCue * 4)],
      ["Vegetation / occlusion", vegetationCue],
      ["Resolution confidence", clamp((image.width * image.height) / (1200 * 900))],
    ],
  };
}

function buildEvidence(metrics) {
  const evidence = [];
  const viewName = metrics.mode === "remote" ? "remote-sensing" : "street-view";

  evidence.push(`The ${viewName} image has entered the Ray Assess demo workflow for property-level review.`);

  if (metrics.damage >= 0.68) {
    evidence.push("The score indicates high-priority damage risk and should be routed to an inspection queue.");
  } else if (metrics.damage >= 0.38) {
    evidence.push("The image contains moderate visual disturbance and should be cross-checked with another view.");
  } else {
    evidence.push("The current image does not show strong damage cues and can be monitored at lower priority.");
  }

  if (metrics.edgeDensity > 0.44) {
    evidence.push("Elevated texture and edge density may correspond to debris, structural breaks, roof changes, or surface disturbance.");
  }

  if (metrics.darkCue > 0.2) {
    evidence.push("Dark regions may indicate burn scars, shadow, water, occlusion, or low-light capture conditions.");
  }

  if (metrics.warmCue > 0.04) {
    evidence.push("Warm red-orange cues may be weak evidence of fire effects, exposed soil, rubble, or post-disaster material.");
  }

  if (metrics.mode === "remote" && metrics.roofCue > 0.16) {
    evidence.push("The overhead image includes roof or hard-surface blocks that are suitable for cross-view arbitration.");
  }

  if (metrics.mode === "street" && metrics.vegetationCue > 0.18) {
    evidence.push("Vegetation may partially occlude the structure, so overhead imagery would improve confidence.");
  }

  evidence.push(`Confidence is ${confidenceText(metrics.confidence)}; retain the source image, score, and evidence bullets for audit review.`);
  return evidence;
}

function renderAnalysis(analysis) {
  const scoreText = analysis.damage.toFixed(2);
  const confidence = confidenceText(analysis.confidence);
  const action = analysis.action || actionText(analysis.damage);

  damageScore.textContent = scoreText;
  damageBar.style.width = percent(analysis.damage);
  confidenceLabel.textContent = confidence;
  actionLabel.textContent = action;
  viewLabel.textContent = analysis.view;

  heroScore.textContent = scoreText;
  heroConfidence.textContent = confidence;
  heroAction.textContent = action;
  heroSignal.textContent = analysis.signal;

  evidenceList.replaceChildren();
  analysis.evidence.forEach((item) => {
    const evidenceItem = document.createElement("li");
    evidenceItem.textContent = item;
    evidenceList.append(evidenceItem);
  });

  metricList.innerHTML = analysis.metrics
    .map(
      ([label, value]) => `
        <div class="metric-row">
          <span>${label}</span>
          <strong>${percent(value)}</strong>
          <i style="--metric-width: ${percent(value)}"></i>
        </div>
      `,
    )
    .join("");
}

function actionText(score) {
  if (score >= 0.68) return "Inspect";
  if (score >= 0.38) return "Review";
  return "Monitor";
}

function confidenceText(score) {
  if (score >= 0.72) return "High";
  if (score >= 0.52) return "Medium";
  return "Low";
}

function loadGeneratedSample(kind) {
  const sampleCanvas = document.createElement("canvas");
  sampleCanvas.width = 1280;
  sampleCanvas.height = kind === "remote" ? 860 : 760;
  const ctx = sampleCanvas.getContext("2d");

  if (kind === "remote") {
    drawRemoteSample(ctx, sampleCanvas.width, sampleCanvas.height);
    document.querySelector('input[value="remote"]').checked = true;
  } else {
    drawStreetSample(ctx, sampleCanvas.width, sampleCanvas.height);
    document.querySelector('input[value="street"]').checked = true;
  }

  sampleCanvas.toBlob((blob) => {
    const file = new File([blob], `ray-assess-${kind}-sample.png`, { type: "image/png" });
    analyzeFile(file);
  });
}

function drawRemoteSample(ctx, width, height) {
  ctx.fillStyle = "#8f9f8e";
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < 140; i += 1) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    ctx.fillStyle = i % 4 === 0 ? "#6d7f6b" : "#a9b79a";
    ctx.fillRect(x, y, 90 + Math.random() * 180, 24 + Math.random() * 80);
  }

  ctx.save();
  ctx.translate(width * 0.2, height * 0.15);
  ctx.rotate(-0.16);
  for (let row = 0; row < 5; row += 1) {
    for (let col = 0; col < 8; col += 1) {
      const damaged = row === 2 && col > 2 && col < 6;
      ctx.fillStyle = damaged ? "#4f443c" : "#d9d3c2";
      ctx.fillRect(col * 112, row * 108, 78, 64);
      ctx.strokeStyle = damaged ? "#c26c3d" : "#7d897f";
      ctx.lineWidth = damaged ? 8 : 3;
      ctx.strokeRect(col * 112, row * 108, 78, 64);
    }
  }
  ctx.restore();

  ctx.fillStyle = "rgba(35, 32, 28, 0.48)";
  ctx.beginPath();
  ctx.ellipse(width * 0.58, height * 0.48, 180, 92, -0.2, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = "rgba(230, 182, 86, 0.82)";
  ctx.lineWidth = 18;
  ctx.beginPath();
  ctx.moveTo(width * 0.05, height * 0.76);
  ctx.bezierCurveTo(width * 0.32, height * 0.66, width * 0.58, height * 0.88, width * 0.95, height * 0.64);
  ctx.stroke();
}

function drawStreetSample(ctx, width, height) {
  const sky = ctx.createLinearGradient(0, 0, 0, height * 0.55);
  sky.addColorStop(0, "#9db3bd");
  sky.addColorStop(1, "#e3d7bf");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "#6f7d64";
  ctx.fillRect(0, height * 0.52, width, height * 0.18);

  ctx.fillStyle = "#4b4742";
  ctx.beginPath();
  ctx.moveTo(0, height);
  ctx.lineTo(width, height);
  ctx.lineTo(width * 0.72, height * 0.62);
  ctx.lineTo(width * 0.28, height * 0.62);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#d7c3a7";
  ctx.fillRect(width * 0.18, height * 0.26, width * 0.34, height * 0.28);
  ctx.fillStyle = "#7b3e2d";
  ctx.beginPath();
  ctx.moveTo(width * 0.14, height * 0.26);
  ctx.lineTo(width * 0.55, height * 0.18);
  ctx.lineTo(width * 0.6, height * 0.3);
  ctx.lineTo(width * 0.18, height * 0.36);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#332f2a";
  ctx.fillRect(width * 0.36, height * 0.37, width * 0.1, height * 0.17);
  ctx.fillStyle = "#1f2422";
  ctx.fillRect(width * 0.22, height * 0.34, width * 0.09, height * 0.08);

  ctx.strokeStyle = "#d47a42";
  ctx.lineWidth = 13;
  ctx.beginPath();
  ctx.moveTo(width * 0.16, height * 0.55);
  ctx.lineTo(width * 0.5, height * 0.47);
  ctx.lineTo(width * 0.68, height * 0.63);
  ctx.stroke();

  for (let i = 0; i < 32; i += 1) {
    ctx.fillStyle = i % 3 === 0 ? "#2f2a24" : "#9c724b";
    ctx.fillRect(width * (0.52 + Math.random() * 0.2), height * (0.56 + Math.random() * 0.2), 24, 10);
  }

  ctx.fillStyle = "#56764e";
  ctx.beginPath();
  ctx.arc(width * 0.82, height * 0.36, 110, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#4f352c";
  ctx.fillRect(width * 0.8, height * 0.44, 28, height * 0.22);
}
