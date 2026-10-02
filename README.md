# SKILI Website — Files

## Structure
```
skili-website/
├── index.html      → HTML structure
├── css/
│   └── style.css   → all styles, colors, animations
└── js/
    └── script.js   → intro gate, scroll reveal, parallax
```

## Usage
1. Upload the whole folder to your webspace / project (keep the structure).
2. `index.html` is the entry point.
3. Images are currently pulled directly from `skilimusic.com` (`<img src="https://skilimusic.com/images/...">`). To use your own images, change the `src` paths in `index.html` (e.g. `images/photo1.jpg`) and put the files in your own `images/` folder.
4. The Spotify embed in the Music section points to the "Hiding (feat. LizAnn)" playlist. Swap the ID if you add a direct single later (Spotify → Share → Embed track/playlist to get a new ID).
5. Colors, fonts and animation timing can be adjusted centrally via the CSS variables at the top of `style.css` (`:root { ... }`), including `--radius` for the corner sharpness of cards and buttons.

## Tech
- Plain HTML/CSS/JS, no build tools, no dependencies besides Google Fonts (linked in `index.html`).
- Works offline/locally by double-clicking `index.html`, or on any standard web host.
