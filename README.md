# ASTREA SSP Website

Fast static site for ASTREA Solo Space Program.

## Stack
- HTML
- CSS
- Vanilla JavaScript
- No framework, build chain or external JS dependency

## Structure
- `index.html` — homepage
- `projects.html` — project index
- `projects/icarus.html` — ICARUS-RLV detail page
- `projects/joanus.html` — JOANUS detail page
- `about.html` — program / motivation
- `assets/site.css` — global styles
- `assets/site.js` — navigation, language detection and reveal effects

## Language
If the browser prefers German (`de`, `de-DE`, etc.), the site sets the document language to German and translates the shared navigation / key UI labels. English is the fallback.

## Links
- GitHub: https://github.com/ASTREA-SSP
- Discord: https://discord.gg/NRd868Dkj2

The homepage uses a local HTML/CSS ESP32 technical cutout rather than an external image, keeping the package fast and self-contained.
