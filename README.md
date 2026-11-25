# Rayford AI Lab Website

Source of [rayford-ai.com](https://rayford-ai.com), the project showcase of
Rayford AI Lab: geospatial AI for disaster resilience, with live demos, papers
and code.

The site is a single static page (`index.html`, bilingual EN / 中文) served by
GitHub Pages. `demo/` holds the Ray Assess interactive demo. Project images live
in `assets/projects/` and `assets/research/`.

## Adding a Project

Copy one `<article class="card">` block in `index.html`, set its `data-t`
themes (`demo`, `assess`, `gen`, `agents`, `map`, `res`), and give it an
English and a Chinese line. The counters in the hero update themselves.

## Keeping the Organization Forks Current

Most project repositories live under
[`rayford295`](https://github.com/rayford295) and are forked into
[`Rayford-AI`](https://github.com/Rayford-AI). Run
`scripts/sync-forks.sh` to bring every fork up to date.

## Human Evaluation Subdomain

`human-eval.rayford-ai.com` served the human evaluation of post-disaster
street-view generation. It is offline since the local connector was retired;
see [`docs/human-eval-subdomain.md`](docs/human-eval-subdomain.md).

## License

See [LICENSE](LICENSE). Each project repository carries its own license.
