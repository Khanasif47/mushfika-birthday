# For Mushfika ♡ — Birthday Website

A mobile-friendly, static birthday surprise website built with plain HTML, CSS and JavaScript. It is ready to publish using GitHub Pages.

## Folder structure

```text
mushfika-birthday/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── photos/
    │   ├── photo-1.jpg
    │   ├── photo-2.jpg
    │   ├── photo-3.jpg
    │   └── video-cover.jpg
    ├── videos/
    │   └── our-moments.mp4
    └── audio/
        └── (optional music file)
```

## Add your photos and video

1. Put your photos inside `assets/photos/`.
2. Name them `photo-1.jpg`, `photo-2.jpg`, and `photo-3.jpg`, or change the image paths in `index.html`.
3. Put your video inside `assets/videos/` and name it `our-moments.mp4`, or change the `<source>` path in `index.html`.
4. The selected background song is already included at `assets/audio/birthday-song.mp3`. The music button is included at the bottom-right of the page. The song starts after she taps **Open your surprise** (or she can use the music button); browsers generally block autoplay before a visitor interacts.
5. Use compressed images, audio and a reasonably small MP4 so the page loads quickly on mobile.

The HTML contains comments labelled `PHOTO PLACEHOLDERS` and `VIDEO PLACEHOLDER` showing exactly where these assets are used.

## Personalise the message

Open `index.html` and edit the letter and final message. The birthday date is configured in `script.js`:

```js
const birthday = new Date(2026, 10, 7, 0, 0, 0);
```

JavaScript months start at zero, so `10` means November. This countdown uses the visitor's local device time.

## Publish with GitHub Pages

1. Create a new public GitHub repository, for example `mushfika-birthday`.
2. Upload the contents of this folder (make sure `index.html` is at the repository root).
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch **main** and folder **/(root)**, then Save.
6. Wait for GitHub Pages to publish. Your site URL will look like:
   `https://YOUR-USERNAME.github.io/mushfika-birthday/`

No backend, build step, or npm installation is required.

## Notes

- The site uses Google Fonts when internet access is available; fallback fonts are included.
- There is no autoplay music, so the surprise opens quietly and respectfully. You can add a music player later if you want.
- The cat/bow design is a cute fan-inspired aesthetic rather than an official Hello Kitty asset. You can add your own licensed images if desired.
