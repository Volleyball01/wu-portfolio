# Wu Portfolio

A personal portfolio website for Xiao Wu, a Policy Science student in Japan.  
The site presents background, projects, learning interests, resume highlights, and contact information in English, Chinese, and Japanese.

Live demo: https://wu-portfolio-five.vercel.app

## Overview

Wu Portfolio is a lightweight static website built with plain HTML, CSS, and JavaScript. It is designed to be simple, fast, and easy to maintain while serving as a personal homepage and career-facing portfolio.

The current version focuses on:

- Introducing personal and academic background
- Showcasing small digital projects
- Presenting skills and career direction
- Supporting multilingual visitors
- Providing clear contact links

## Features

- Responsive single-page portfolio
- English / Chinese / Japanese language switching
- Browser language detection
- Saved language preference with `localStorage`
- Project cards with live demo and GitHub links
- Resume snapshot section
- Contact section with email, GitHub, and LinkedIn
- Vercel-ready static deployment

## Tech Stack

- HTML
- CSS
- JavaScript
- Git / GitHub
- Vercel

## Project Structure

```text
wu-portfolio/
├── index.html          # Main page structure
├── style.css           # Page styling and responsive layout
├── script.js           # Language switching behavior
├── data/
│   └── i18n.js         # Multilingual text content
├── assets/             # Images and icons
├── private_notes/      # Personal project notes and development logs
└── README.md           # Project documentation
```

## Local Development

Because this is a static website, no build step is required.

Open `index.html` directly in a browser, or run a simple local server:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Content Management

Most visible text is managed through `data/i18n.js`.

When adding or editing text, update all supported languages:

- `en`
- `zh`
- `ja`

HTML elements use the `data-i18n` attribute to connect page content with translation keys.

## Deployment

The project is deployed with Vercel. After pushing changes to GitHub, Vercel can automatically rebuild and publish the latest version.

## Roadmap

- Improve the hero section
- Add more detailed project descriptions
- Expand the resume section
- Improve the contact area with stronger visual hierarchy
- Add real screenshots or images for projects
- Continue refining the multilingual content

## Author

Xiao Wu  
GitHub: https://github.com/Volleyball01  
LinkedIn: https://www.linkedin.com/in/ningbo-wu-a8553b398
