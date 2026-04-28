(function () {
  const storageKey = "rayford-language";
  const translations = {
    en: {
      "meta.title": "Rayford AI | Property-Level Resilience Intelligence",
      "meta.description":
        "Rayford AI builds Ray Assess, a property-level disaster damage assessment AI for local governments, emergency managers, and recovery teams.",
      "nav.product": "Product",
      "nav.customers": "Customers",
      "nav.validation": "Validation",
      "nav.innovation": "Innovation",
      "nav.team": "Team",
      "nav.roadmap": "Roadmap",
      "nav.demo": "Demo",
      "hero.eyebrow": "Ray by Rayford AI",
      "hero.title": "Every property, ready and recoverable.",
      "hero.text":
        "Ray turns local hazard history, post-disaster imagery, and property records into auditable damage evidence for emergency managers, local governments, and recovery teams.",
      "hero.primary": "Explore Ray",
      "hero.demo": "View Demo",
      "hero.secondary": "Our Research",
      "demoVideo.eyebrow": "Interactive demo",
      "demoVideo.title":
        "Watch remote and street evidence become a review-ready decision.",
      "demoVideo.text":
        "Remote sensing gives disaster teams coverage at scale. Street-view capture adds ground confirmation. Ray Assess turns both into a damage score, evidence trail, confidence, and inspection guidance.",
      "demoVideo.primary": "Open interactive demo",
      "demoVideo.secondary": "See who uses it",
      "demoVideo.signalOne": "Upstream",
      "demoVideo.signalOneValue": "Remote + street capture",
      "demoVideo.signalTwo": "Output",
      "demoVideo.signalTwoValue": "Property evidence packet",
      "demoVideo.signalThree": "Users",
      "demoVideo.signalThreeValue": "Emergency management, GIS, recovery teams",
      "panel.sample": "Hurricane Milton sample",
      "panel.damageScore": "Damage score",
      "panel.confidence": "Confidence",
      "panel.high": "High",
      "panel.action": "Action",
      "panel.inspect": "Inspect",
      "panel.body":
        "Roof edge deformation, debris pattern, and street-level evidence indicate moderate structural damage.",
      "product.eyebrow": "Start here",
      "product.title": "Damage assessment and claims triage.",
      "product.text":
        "Rayford AI starts with one urgent workflow: help human teams decide which properties need attention first, and why.",
      "feature.assess.title": "Property-level damage evidence",
      "feature.assess.text":
        "Compare pre-event and post-event imagery, score visible damage, attach evidence, and show confidence at the parcel level.",
      "feature.claims.title": "Claims and inspection triage",
      "feature.claims.text":
        "Rank properties for adjuster review and package imagery, metadata, and explanations for faster claim workflows.",
      "feature.risk.title": "Mitigation and grant support",
      "feature.risk.text":
        "Connect damage evidence with local hazard history, mitigation priorities, and FEMA-aligned recovery documentation.",
      "customers.eyebrow": "Beachhead",
      "customers.title":
        "Starting with emergency management teams that need property evidence fast.",
      "pilot.badge": "2026 pilots",
      "pilot.title": "Pilot pricing available.",
      "pilot.text":
        "We are opening a small number of early pilots for historical event validation and property-level assessment workflows.",
      "pilot.action": "Discuss a pilot",
      "customers.emergency.title": "Emergency management offices",
      "customers.emergency.text":
        "Prioritize preliminary damage assessment when a disaster creates more properties than field teams can inspect immediately.",
      "customers.insurers.title": "Adjusters and insurance partners",
      "customers.insurers.text":
        "Use the same evidence package for claims triage once the public sector assessment workflow is validated.",
      "customers.governments.title": "Local governments and GIS teams",
      "customers.governments.text":
        "Convert street-level and aerial data into property-level damage layers for preliminary assessment, recovery planning, and public assistance workflows.",
      "customers.consultants.title": "Recovery consultants",
      "customers.consultants.text":
        "Produce faster situational evidence for clients managing resilience projects, recovery funding, and infrastructure repair.",
      "validation.eyebrow": "Why now",
      "validation.title":
        "Disaster losses are rising, but property evidence is still slow.",
      "proof.noaaCount":
        "U.S. billion-dollar weather and climate disasters in 2024.",
      "proof.noaaDamage":
        "Estimated U.S. damage from 2024 billion-dollar disasters.",
      "proof.swissRe":
        "Global insured natural catastrophe losses reported for 2024.",
      "proof.featured": "Featured",
      "proof.mosaic":
        "Industry coverage of Yifan Yang and Dr. Lei Zou's Texas A&M Hurricane Milton street-view damage assessment research.",
      "source.mosaic": "Mosaic feature ↗",
      "source.fema": "FEMA PDA process ↗",
      "edge.eyebrow": "Competitive edge",
      "edge.title": "Not another imagery vendor or pre-event risk score.",
      "edge.text":
        "Rayford AI focuses on post-event decisions: what changed, how severe it is, what evidence supports the score, and what a human reviewer should inspect next.",
      "edge.one.title": "Street-view plus remote sensing",
      "edge.one.text":
        "Imagery-only tools show pixels. Ray Assess compares ground and overhead evidence at the property level.",
      "edge.two.title": "Built for disaster response",
      "edge.two.text":
        "Pre-event underwriting tools forecast risk. Ray packages post-event damage evidence for recovery decisions.",
      "edge.three.title": "Research-backed audit trail",
      "edge.three.text":
        "Model arbitration, confidence, and paper-backed methods make the output easier for public teams to review and defend.",
      "innovation.eyebrow": "Innovation",
      "innovation.title":
        "A research-backed engine for property-level resilience.",
      "innovation.text":
        "Rayford AI translates peer-reviewed disaster GeoAI research into a practical evidence layer for damage assessment, claims triage, and long-term resilience planning.",
      "innovation.manifesto.title":
        "From hazard data to trusted recovery decisions.",
      "innovation.manifesto.text":
        "Ray is designed to read a property across time: what hazards it has faced, what changed after an event, what evidence supports the model's judgment, and what a human reviewer should do next.",
      "innovation.pillar.one.title": "Multimodal damage evidence",
      "innovation.pillar.one.text":
        "Fuse street-view, satellite, parcel, and local hazard context so property damage is assessed with more than one sensor.",
      "innovation.pillar.two.title": "Generative missing-view recovery",
      "innovation.pillar.two.text":
        "Explore satellite-to-street synthesis when post-disaster ground views are delayed, incomplete, or unsafe to collect.",
      "innovation.pillar.three.title": "Model arbitration and audit trails",
      "innovation.pillar.three.text":
        "Compare model signals, expose confidence, and preserve property-level evidence for human review.",
      "research.eyebrow": "Research foundation",
      "research.title": "Papers behind Rayford AI.",
      "research.text":
        "The company starts from Yifan Yang's research track in street-view disaster assessment, visual-language models, generative GeoAI, and spatial intelligence.",
      "paper.sat2street.meta": "IGARSS 2026 · Conference Paper",
      "paper.sat2street.text":
        "A path toward generating street-level disaster evidence from satellite context when field imagery is missing.",
      "paper.damagearbiter.meta": "2026 · Preprint",
      "paper.damagearbiter.text":
        "The arbitration layer that inspires Ray's confidence, disagreement, and evidence-ranking design.",
      "paper.hyperlocal.meta":
        "Computers, Environment and Urban Systems · 2025",
      "paper.hyperlocal.text":
        "The journal foundation for comparing pre-event and post-event street-view imagery at a hyperlocal scale.",
      "paper.disastervlp.meta": "ICC 2025 · Best Student Paper",
      "paper.disastervlp.text":
        "A visual-language foundation for reading multiple forms of disaster damage from street-level scenes.",
      "paper.geolocator.meta": "Applied Sciences · 2024",
      "paper.geolocator.text":
        "Related spatial intelligence work on location-aware multimodal reasoning and geo-privacy.",
      "paper.spatial.meta": "Broader spatial AI foundation",
      "paper.spatial.text":
        "Esri Press book chapter showing applied geospatial computer vision workflows that inform Rayford AI's product craft.",
      "method.eyebrow": "Evidence layer",
      "method.title": "From imagery to review-ready decisions.",
      "method.one.title": "Link property context",
      "method.one.text":
        "Parcel records, local hazard history, and pre-event imagery.",
      "method.two.title": "Compare post-event evidence",
      "method.two.text":
        "Street-view, satellite, drone, and field imagery where available.",
      "method.three.title": "Arbitrate model signals",
      "method.three.text":
        "Damage scoring, multimodal reasoning, and confidence estimates.",
      "method.four.title": "Export audit trail",
      "method.four.text": "Property-level evidence packages for human review.",
      "team.eyebrow": "Team",
      "team.title": "Built from disaster GeoAI research with technical mentorship.",
      "team.yifan.role": "Founder",
      "team.yifan.text":
        "Technical lead for Ray, focused on street-view disaster assessment, visual-language models, multimodal arbitration, and autonomous GeoAI.",
      "team.zou.role": "Scientific and technical advisor",
      "team.zou.text":
        "Advisor for the GeoAI and disaster resilience foundation behind Rayford AI's research-to-venture path.",
      "team.tu.role": "Technical advisor",
      "team.tu.text":
        "Committee advisor supporting computer vision, multimodal model design, and validation strategy for Ray's disaster assessment engine.",
      "team.cai.role": "Technical advisor",
      "team.cai.text":
        "Committee advisor supporting built environment context, infrastructure resilience, and product-risk review for property-level recovery decisions.",
      "team.linkedin": "LinkedIn Profile ↗",
      "roadmap.eyebrow": "2026 Roadmap",
      "roadmap.title": "Ten weeks from research prototype to pilot-ready demo.",
      "roadmap.one": "Complete 40 customer discovery interviews.",
      "roadmap.two":
        "Build a Ray Assess demo for a historical disaster event.",
      "roadmap.three": "Create two property-level validation case studies.",
      "roadmap.four": "Secure three serious pilot or LOI conversations.",
      "status.complete": "Complete",
      "status.active": "In progress",
      "status.planned": "Planned",
      "closing.title": "The resilience AI for every property.",
      "closing.sub":
        "We are scheduling customer discovery and pilot conversations with emergency management, local government, GIS, and recovery teams.",
      "closing.contact": "Discuss a Pilot",
      "closing.research": "Research Origin ↗",
      "footer.text":
        "Rayford AI builds Ray, the property-level resilience intelligence platform.",
      "footer.contact": "contact@rayford-ai.com",
      "footer.repo": "GitHub ↗",
      "footer.linkedin": "LinkedIn ↗",
      "footer.privacyLink": "Privacy",
      "footer.privacy":
        "Pilot property imagery is handled only for assessment and validation work under agreed data terms."
    },
    zh: {
      "meta.title": "Rayford AI | 面向房产的灾害韧性智能",
      "meta.description":
        "Rayford AI 打造 Ray Assess，一个服务地方政府、应急管理与恢复团队的房产级灾害损伤评估 AI。",
      "nav.product": "产品",
      "nav.customers": "客户",
      "nav.validation": "验证",
      "nav.innovation": "创新",
      "nav.team": "团队",
      "nav.roadmap": "路线图",
      "nav.demo": "演示",
      "hero.eyebrow": "Ray by Rayford AI",
      "hero.title": "让每一处资产，都能预备、评估与恢复。",
      "hero.text":
        "Ray 将本地灾害历史、灾后影像和房产记录转化为可审计的损伤证据，服务应急管理、地方政府与灾后恢复团队。",
      "hero.primary": "了解 Ray",
      "hero.demo": "查看演示",
      "hero.secondary": "查看研究",
      "demoVideo.eyebrow": "交互式演示",
      "demoVideo.title": "看遥感与街景证据如何变成可复核的决策。",
      "demoVideo.text":
        "遥感帮助灾害团队大范围覆盖。街景采集提供地面确认。Ray Assess 将两者转化为损伤评分、证据链、置信度与查勘建议。",
      "demoVideo.primary": "打开交互式演示",
      "demoVideo.secondary": "查看服务对象",
      "demoVideo.signalOne": "上游数据",
      "demoVideo.signalOneValue": "遥感 + 街景采集",
      "demoVideo.signalTwo": "输出",
      "demoVideo.signalTwoValue": "房产证据包",
      "demoVideo.signalThree": "用户",
      "demoVideo.signalThreeValue": "应急管理、GIS 与恢复团队",
      "panel.sample": "Hurricane Milton 样例",
      "panel.damageScore": "损伤评分",
      "panel.confidence": "置信度",
      "panel.high": "高",
      "panel.action": "建议动作",
      "panel.inspect": "现场核查",
      "panel.body":
        "屋顶边缘变形、碎片分布与街景证据表明该房产可能存在中等结构损伤。",
      "product.eyebrow": "核心功能",
      "product.title": "灾害损伤评估与理赔分流。",
      "product.text":
        "Rayford AI 从一个高频、紧迫的流程切入：帮助人工团队判断哪些房产需要优先处理，以及判断依据是什么。",
      "feature.assess.title": "房产级损伤证据",
      "feature.assess.text":
        "对比灾前与灾后影像，评估可见损伤，绑定证据，并在地块级别展示模型置信度。",
      "feature.claims.title": "理赔与查勘分流",
      "feature.claims.text":
        "为理赔师排序待核查房产，并打包影像、元数据和解释说明，加快理赔工作流。",
      "feature.risk.title": "减灾与资金申请支持",
      "feature.risk.text":
        "把损伤证据连接到本地灾害历史、减灾优先级和 FEMA 相关恢复文档。",
      "customers.eyebrow": "滩头市场",
      "customers.title": "从需要快速房产证据的应急管理团队切入。",
      "pilot.badge": "2026 试点",
      "pilot.title": "可讨论早期试点价格。",
      "pilot.text":
        "我们正在开放少量早期试点，用于历史灾害验证和房产级评估工作流。",
      "pilot.action": "讨论试点",
      "customers.emergency.title": "应急管理办公室",
      "customers.emergency.text":
        "当灾害影响的房产数量超过现场团队即时查勘能力时，帮助排序初步损伤评估。",
      "customers.insurers.title": "理赔师与保险合作方",
      "customers.insurers.text":
        "在公共部门评估工作流验证后，将同一证据包用于理赔分流。",
      "customers.governments.title": "地方政府与 GIS 团队",
      "customers.governments.text":
        "将街景与航拍数据转化为房产级损伤图层，支持初步损伤评估、恢复规划和公共援助流程。",
      "customers.consultants.title": "恢复与韧性顾问",
      "customers.consultants.text":
        "为管理韧性项目、恢复资金和基础设施修复的客户，更快生成可用于决策的现场证据。",
      "validation.eyebrow": "为什么是现在",
      "validation.title": "灾害损失持续上升，但房产级证据仍然太慢。",
      "proof.noaaCount": "2024 年美国十亿美元级天气与气候灾害数量。",
      "proof.noaaDamage": "2024 年美国十亿美元级灾害造成的估计损失。",
      "proof.swissRe": "2024 年全球自然灾害已保险损失。",
      "proof.featured": "行业报道",
      "proof.mosaic":
        "Mosaic 报道了 Yifan Yang 与 Dr. Lei Zou 在 Texas A&M 开展的 Hurricane Milton 街景损伤评估研究。",
      "source.mosaic": "Mosaic 报道 ↗",
      "source.fema": "FEMA 初步损伤评估流程 ↗",
      "edge.eyebrow": "竞争优势",
      "edge.title": "不是另一个影像供应商，也不是灾前风险分数。",
      "edge.text":
        "Rayford AI 聚焦灾后决策：发生了什么变化，损伤有多严重，哪些证据支持评分，以及人工复核者下一步该看哪里。",
      "edge.one.title": "街景加遥感证据",
      "edge.one.text":
        "单纯影像工具只展示像素。Ray Assess 在房产级别比较地面与空中证据。",
      "edge.two.title": "为灾害响应而设计",
      "edge.two.text":
        "灾前承保工具预测风险。Ray 打包灾后损伤证据，服务恢复决策。",
      "edge.three.title": "研究支撑的审计轨迹",
      "edge.three.text":
        "模型仲裁、置信度和论文支撑的方法，让公共部门更容易复核和解释输出。",
      "innovation.eyebrow": "创新",
      "innovation.title": "以研究为底座的房产级韧性智能引擎。",
      "innovation.text":
        "Rayford AI 将经过同行评议的灾害 GeoAI 研究转化为实用证据层，服务损伤评估、理赔分流和长期韧性规划。",
      "innovation.manifesto.title": "从灾害数据到可信恢复决策。",
      "innovation.manifesto.text":
        "Ray 的设计目标是跨时间理解一处房产：它经历过什么灾害，灾后发生了什么变化，模型判断依赖哪些证据，以及人工复核者下一步应该做什么。",
      "innovation.pillar.one.title": "多模态损伤证据",
      "innovation.pillar.one.text":
        "融合街景、卫星、地块和本地灾害背景，让房产损伤评估不只依赖单一传感器。",
      "innovation.pillar.two.title": "生成式缺失视角恢复",
      "innovation.pillar.two.text":
        "当灾后地面视角延迟、不完整或采集风险较高时，探索从卫星到街景的生成式证据补全。",
      "innovation.pillar.three.title": "模型仲裁与审计轨迹",
      "innovation.pillar.three.text":
        "比较模型信号，暴露置信度，并保留房产级证据，供人工复核。",
      "research.eyebrow": "研究底座",
      "research.title": "支撑 Rayford AI 的论文。",
      "research.text":
        "公司起步于 Yifan Yang 在街景灾害评估、视觉语言模型、生成式 GeoAI 和空间智能方向的研究积累。",
      "paper.sat2street.meta": "IGARSS 2026 · 会议论文",
      "paper.sat2street.text":
        "探索在现场影像缺失时，如何从卫星上下文生成街景级灾害证据。",
      "paper.damagearbiter.meta": "2026 · 预印本",
      "paper.damagearbiter.text":
        "为 Ray 的置信度、模型分歧和证据排序设计提供了仲裁层思路。",
      "paper.hyperlocal.meta":
        "Computers, Environment and Urban Systems · 2025",
      "paper.hyperlocal.text":
        "为灾前与灾后街景影像的超本地尺度对比提供期刊论文基础。",
      "paper.disastervlp.meta": "ICC 2025 · 最佳学生论文",
      "paper.disastervlp.text":
        "为从街景场景中理解多维灾害损伤提供视觉语言模型基础。",
      "paper.geolocator.meta": "Applied Sciences · 2024",
      "paper.geolocator.text":
        "关于位置感知多模态推理和地理隐私的相关空间智能研究。",
      "paper.spatial.meta": "更广义的空间 AI 基础",
      "paper.spatial.text":
        "Esri Press 书章，展示应用型地理空间计算机视觉流程，对 Rayford AI 的产品实现有启发。",
      "method.eyebrow": "证据层",
      "method.title": "从影像到可复核的决策。",
      "method.one.title": "连接房产背景",
      "method.one.text": "地块记录、本地灾害历史与灾前影像。",
      "method.two.title": "比较灾后证据",
      "method.two.text": "可用的街景、卫星、无人机和现场影像。",
      "method.three.title": "仲裁模型信号",
      "method.three.text": "损伤评分、多模态推理与置信度估计。",
      "method.four.title": "导出审计轨迹",
      "method.four.text": "供人工复核的房产级证据包。",
      "team.eyebrow": "团队",
      "team.title": "源于灾害 GeoAI 研究，并由技术导师支持。",
      "team.yifan.role": "创始人",
      "team.yifan.text":
        "Ray 的技术负责人，聚焦街景灾害评估、视觉语言模型、多模态仲裁和自主 GeoAI。",
      "team.zou.role": "科学与技术顾问",
      "team.zou.text":
        "为 Rayford AI 从研究走向产品的路径提供 GeoAI 与灾害韧性方向指导。",
      "team.tu.role": "技术顾问",
      "team.tu.text":
        "委员会导师，支持计算机视觉、多模态模型设计和 Ray 灾害评估引擎的验证策略。",
      "team.cai.role": "技术顾问",
      "team.cai.text":
        "委员会导师，支持建成环境背景、基础设施韧性和房产级恢复决策的产品风险评估。",
      "team.linkedin": "领英主页 ↗",
      "roadmap.eyebrow": "2026 路线图",
      "roadmap.title": "用十周时间从研究原型走向可试点演示。",
      "roadmap.one": "完成 40 次客户发现访谈。",
      "roadmap.two": "基于历史灾害事件构建 Ray Assess 演示。",
      "roadmap.three": "完成两个房产级验证案例。",
      "roadmap.four": "推进三个严肃的试点或 LOI 对话。",
      "status.complete": "已完成",
      "status.active": "进行中",
      "status.planned": "计划中",
      "closing.title": "面向每一处房产的韧性 AI。",
      "closing.sub":
        "我们正在与应急管理、地方政府、GIS 和灾后恢复团队安排客户访谈与试点对话。",
      "closing.contact": "讨论试点",
      "closing.research": "研究起点 ↗",
      "footer.text": "Rayford AI 打造 Ray，面向房产级韧性智能平台。",
      "footer.contact": "contact@rayford-ai.com",
      "footer.repo": "GitHub ↗",
      "footer.linkedin": "领英 ↗",
      "footer.privacyLink": "隐私",
      "footer.privacy":
        "试点房产影像仅用于评估与验证工作，并按约定的数据条款处理。"
    }
  };

  function readStoredLanguage() {
    try {
      return window.localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function writeStoredLanguage(language) {
    try {
      window.localStorage.setItem(storageKey, language);
    } catch (error) {
      return;
    }
  }

  function setLanguage(language, shouldStore) {
    const normalizedLanguage = language === "zh" ? "zh" : "en";
    const selected = translations[normalizedLanguage];
    const fallback = translations.en;
    const metaDescription = document.querySelector('meta[name="description"]');

    document.documentElement.lang =
      normalizedLanguage === "zh" ? "zh-Hans" : "en";
    document.body.dataset.lang = normalizedLanguage;
    document.title = selected["meta.title"] || fallback["meta.title"];

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        selected["meta.description"] || fallback["meta.description"]
      );
    }

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      const value = selected[key] || fallback[key];

      if (value) {
        element.textContent = value;
      }
    });

    document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
      const isActive = button.dataset.langToggle === normalizedLanguage;
      button.setAttribute("aria-pressed", String(isActive));
    });

    if (shouldStore) {
      writeStoredLanguage(normalizedLanguage);
    }
  }

  document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.langToggle, true);
    });
  });

  setLanguage(readStoredLanguage(), false);

  const heroScene = document.querySelector(".hero-scene");

  if (heroScene && "IntersectionObserver" in window) {
    const animatedElements = heroScene.querySelectorAll(
      ".storm-track, .scan-line, .signal, .street, .parcel"
    );
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        animatedElements.forEach((element) => {
          element.style.animationPlayState = entry.isIntersecting
            ? "running"
            : "paused";
        });
      },
      { threshold: 0 }
    );

    heroObserver.observe(heroScene);
  }

  const navToggle = document.querySelector(".nav-toggle");
  const primaryNav = document.getElementById("primary-nav");

  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", () => {
      const expanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", String(!expanded));
      primaryNav.classList.toggle("is-open", !expanded);
    });

    primaryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navToggle.setAttribute("aria-expanded", "false");
        primaryNav.classList.remove("is-open");
      });
    });
  }
})();
