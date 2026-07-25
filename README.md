# my-react-portfolio

A responsive, interactive portfolio built with React and Vite, showcasing eight projects from my coding bootcamp alongside my skills and background.

**Live site:** https://my-react-portfolio-t03h.onrender.com

**Repo:** [https://github.com/JudithKnight123/my-react-portfolio.git](https://github.com/JudithKnight123/my-react-portfolio.git)

## Features

- **Home** — An animated `LiquidEther` background behind a `Masonry` gallery of 8 bootcamp projects. Each tile links out to its GitHub repo, with hover-scale and staggered entrance animations built using GSAP.
- **About** — A short bio and role summary over an interactive `Particles` background that responds to mouse movement.
- **Skills** — An animated typing intro (`TextType`) over a `SoftAurora` gradient background, with a responsive grid of skill cards (`GridBox`) covering JavaScript, React, Node.js, HTML, CSS, Tailwind CSS, JSON, REST APIs, Python, and TypeScript.
- **Navigation** — A single-page layout (`Layout` + `NavBar`) that swaps between Home, About, and Skills via React state, with a consistent footer across all views.
- **Responsive design** — Layouts adapt across desktop, tablet, and mobile.

## Tech Stack

- React 18
- Vite
- GSAP (animation)
- Three.js / OGL (WebGL backgrounds — `LiquidEther`, `Particles`, `SoftAurora`)
- Motion (animation helpers)
- ESLint

## Project Structure

```
src/
├── assets/          # Project preview images
├── components/      # Header, NavBar, Footer, Layout, Masonry, GridBox, and WebGL background components
├── pages/           # HomePage, AboutPage, SkillsPage
├── App.jsx          # Page routing via state
└── main.jsx
```

## Getting Started

```bash
# Clone the repo
git clone <!-- fill in your repo URL -->
cd my-react-portfolio

# Install dependencies
npm install

# Run the dev server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for production

```bash
npm run build
npm run preview
```

## Deployment

This project is deployed on [Render](https://render.com/) as a static site:

1. Push the repo to GitHub.
2. On Render, create a new **Static Site** and connect the repo.
3. Build command: `npm run build`
4. Publish directory: `dist`

## Projects Showcased

The homepage gallery links to the following bootcamp projects:

- https://github.com/JudithKnight123/my-bootcamp-portfolio -->
- https://github.com/JudithKnight123/full-stack-notes-app -->
- https://github.com/JudithKnight123/python-readme-generator -->
- https://github.com/JudithKnight123/full-stack-blog-application -->
- https://github.com/rrana5106/geeks-unleashed -->

## Author

**Judith Knight**
