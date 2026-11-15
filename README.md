<div align="center">

# ⚡ ThunderType – Free English Typing Test

**Online WPM speed test with practice passages, Government Exam Mode, CPCT English mock tests, typing games and a progress dashboard.**

No signup. No ads. Works in your browser, installable as an app.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](#-tech-stack)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](#-tech-stack)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](#-tech-stack)
[![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?logo=chartdotjs&logoColor=white)](#-tech-stack)
[![PWA](https://img.shields.io/badge/PWA-ready-5A0FC8?logo=pwa&logoColor=white)](#-install-as-an-app-pwa)
[![Free](https://img.shields.io/badge/price-free-22c55e)](#-faq)

</div>

---

## 📖 About

**ThunderType** is a free English typing speed test built by [Mayank (Wondermayank)](https://wondermayank.in) under the **ThunderStudy** brand. It helps students and job aspirants check their **WPM (words per minute)** and **accuracy**, practise for **government typing exams**, and track their improvement over time.

Everything runs in the browser. Your history, scores, XP and badges are stored locally on your device using `localStorage`.

## ✨ Features

### ⌨️ Typing practice
- Built-in practice passages with **Easy / Medium / Hard** levels
- **Custom Text** mode – paste your own paragraph or upload a `.txt` file
- Selectable **countdown timer** (presets or custom seconds)
- **Live WPM, accuracy, errors and progress bar** while you type
- Correct / wrong character highlighting with current-word focus
- **Virtual keyboard** that shows the next key to press
- **Caps Lock warning**
- **Weak-spot drill** to practise the keys and words you miss most
- "Finished Early" result with the seconds you had to spare

### 🏛️ Government Exam Mode
- Fixed duration, **backspace disabled**, minimum WPM + accuracy needed to pass
- Pass / fail result so you can practise before recruitment typing tests
- Always confirm the exact criteria in your exam's official notification

### 🖥️ CPCT English (word-to-word mock tests)
- Multiple mock tests in a **fullscreen exam-software style** interface
- Section bar, duration selector, word counter and instructions sidebar
- Detailed **result report**: status, score, correct / wrong / extra words and metrics

### 👻 Ghost Race
- Race a "ghost" of your previous best on the same passage
- A marker moves at your old pace so you can see if you're ahead or behind

### 🎮 Typing games
- Fun canvas-based typing games with difficulty levels
- Daily challenge card and personal best tracking

### 📊 Progress dashboard
- Summary cards, **WPM progress chart** (Chart.js) and full **history table**
- **XP and levels**, plus unlockable **achievement badges**
- Personal best for every passage

### 🎨 Design & experience
- **ThunderStudy Clay UI** – soft clay shadows, pill buttons, bottom dock navigation
- **Light and dark mode** (saved choice, never follows the system setting)
- Fully **responsive** – mobile, tablet and desktop
- Accessible focus states and reduced-motion support
- SEO ready: meta tags, Open Graph / Twitter cards, `WebApplication` and `FAQPage` JSON-LD

## 🎯 Who is it for?

- Students preparing for **CPCT, SSC, Banking, Railway, Court** and other typing tests
- **Computer operator / data entry** job aspirants
- Anyone who wants to improve English typing speed and accuracy

## 🧮 How WPM is calculated

```
WPM = (correct characters ÷ 5) ÷ time in minutes
```

A "word" is counted as 5 characters, and typing errors reduce your final WPM.

## 🚀 Getting Started

### Run locally

```bash
# 1. Clone the repository
git clone https://github.com/wondermayank/english_typings.git

# 2. Go into the folder
cd english_typings

# 3. Start a local server (any static server works)
npx serve .
# or
python -m http.server 8000
```

Then open `http://localhost:3000` (or `http://localhost:8000`) in your browser.

> The main app is a single `index.html`, so you can also just double-click it. Features that call the `api/` endpoints need the project to be deployed on a host that supports them.

### Deploy

It is a static site plus an `api/` folder, so it works on platforms like **Vercel, Netlify or Cloudflare Pages**.

## 📱 Install as an app (PWA)

The repo includes a web app manifest and icons. On a supported browser, use **Install app / Add to Home Screen** to open ThunderType like a native app.

## 📂 Project Structure

```
english_typings/
├── api/                          # Backend endpoint(s) for optional features
├── index.html                    # The whole typing app (UI, logic, styles)
├── favicon.svg                   # Favicon (SVG)
├── favicon.ico                   # Favicon (ICO)
├── favicon-96x96.png             # Favicon (PNG)
├── apple-touch-icon.png          # iOS home screen icon
├── web-app-manifest-192x192.png  # PWA icon
├── web-app-manifest-512x512.png  # PWA icon
└── README.md                     # Project documentation
```

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, light/dark themes, clay UI) |
| Logic | Vanilla JavaScript |
| Charts | [Chart.js](https://www.chartjs.org/) |
| Font | [Inter](https://fonts.google.com/specimen/Inter) |
| Storage | Browser `localStorage` |

## ❓ FAQ

**Is it free?** Yes, completely free with no signup.

**Is my typing history saved?** Yes, in your browser's `localStorage`. It stays on the same device and browser, and clearing browser data resets it.

**Can I practise with my own text?** Yes. Choose *Custom Text* and paste a paragraph or upload a `.txt` file.

**What is Government Exam Mode?** A strict mode with fixed time and backspace disabled, plus a minimum WPM and accuracy to pass.

**What is Ghost Race?** A race against your own previous best attempt on the same passage.

## 💡 Typing Tips

1. Keep your fingers on the home row (`ASDF JKL;`).
2. Focus on **accuracy first**, speed comes naturally.
3. Don't look at the keyboard – practise touch typing.
4. Practise 10–15 minutes every day.
5. Sit straight and keep your wrists relaxed.

## 🤝 Contributing

Suggestions and improvements are welcome!

1. Fork this repository
2. Create a branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m "Add my feature"`
4. Push the branch: `git push origin feature/my-feature`
5. Open a Pull Request

## 📬 Contact

- 🌐 Website: [wondermayank.in](https://wondermayank.in)
- 📧 Email: contact@wondermayank.indevs.in
- 🐙 GitHub: [@wondermayank](https://github.com/wondermayank)

## 📄 License

Free to use for learning and personal practice. Please give credit to **Wondermayank / ThunderStudy** if you share or reuse it.

---

<div align="center">

Made with ❤️ in India by **Wondermayank** · Part of **ThunderStudy**

</div>
