# blakebullwinkel.github.io

Personal website with my bio, research publications, resume, and contact info.

https://blakebullwinkel.com/

## Archive

The previous homepage, including Projects and its original layout, is preserved
in [archive/](archive/index.html). Assets not used by the live pages are in
[archive/static/](archive/static/), including older images, reports, and notebooks.
The archived page links to their new locations; old `/static/` URLs for those
files have changed.

[static/](static/) contains only the profile photo, social icons, favicon, error
image, resume, and thesis used by the live pages. These URLs are unchanged.

## Appearance

The homepage, math notes, archive page, and 404 page default to dark mode.
Use the sun/moon button in the upper-right corner to switch themes. Your choice
is saved in browser local storage and applied before the page renders on later
visits. Dark mode also works without JavaScript; the toggle is hidden in that case.

Colors and the toggle styling are shared in [theme.css](theme.css), with the
preference and toggle behavior in [theme.js](theme.js). Exported notebooks retain
their original appearance.

## Local preview

From the repository root, run:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000/ for the homepage or
http://127.0.0.1:8000/archive/ for the archived page.
