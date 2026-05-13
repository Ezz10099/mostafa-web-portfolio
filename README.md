# Mostafa's Web Development Portfolio

A beginner-friendly portfolio homepage built with plain HTML, CSS, and JavaScript.

Mostafa is a nursing student learning web development and building simple nursing-related digital tools.

## Project Sections

- **Hero**: A welcoming introduction.
- **About Me**: A short note about Mostafa's nursing and web development journey.
- **Skills**: Beginner web skills and healthcare-focused interests.
- **Projects**: Placeholder cards for future nursing and student tools.
- **Contact**: Simple ways to connect.

## Project Files

- `index.html` - The page structure and content.
- `style.css` - The visual design and mobile-friendly layout.
- `script.js` - Small interactive features for the page and service worker registration.
- `manifest.json` - Basic PWA app information used by browsers.
- `service-worker.js` - Saves core files so the site can work offline.

## How to View the Website

Open `index.html` in your web browser.

No build tools, frameworks, or extra libraries are required.

## Beginner Notes

This project is intentionally simple so it is easy to read, edit, and learn from. Comments are included in the code to explain what each main part does.


## Basic PWA Support

PWA means **Progressive Web App**. It is a normal website that can include app-like features, such as a home screen name, theme color, and offline support.

This portfolio keeps everything simple with plain HTML, CSS, and JavaScript. No frameworks or build tools are needed.

### How to Test the PWA

1. Serve the folder with a local web server, for example:

   ```bash
   python3 -m http.server 8000
   ```

2. Open `http://localhost:8000` in your browser.
3. Open the browser developer tools and check that the service worker is registered.
4. Visit the site once while online so the service worker can save the core files.
5. Turn on offline mode in developer tools, then refresh the page.

Offline mode works after the first online visit because the service worker needs one successful visit to cache the main files.
