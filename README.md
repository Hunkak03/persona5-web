# 🎭 Persona 5 Web Menu

<p align="center">
  <strong>An immersive Persona 5-inspired interactive web menu built with React</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2.4-blue.svg" alt="React 19.2.4">
  <img src="https://img.shields.io/badge/Vite-8.0.4-purple.svg" alt="Vite 8.0.4">
  <img src="https://img.shields.io/badge/Framer_Motion-12.38.0-red.svg" alt="Framer Motion">
  <img src="https://img.shields.io/badge/License-MIT-orange.svg" alt="MIT License">
  <img src="https://img.shields.io/badge/Persona_5-Fan_Project-black.svg" alt="Persona 5 Fan Project">
</p>

<p align="center">
  <strong>⭐ Inspired by Atlus' Persona 5 - Take Your Heart ⭐</strong>
</p>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Sound System](#-sound-system)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)
- [Disclaimer](#-disclaimer)

---

## 🌟 Overview

**Persona 5 Web Menu** is a faithful recreation of the iconic Persona 5 menu system, built as a modern React web application. Experience the stylish UI that made Persona 5 famous, complete with:

- 🎨 **Authentic P5 Aesthetic** - Bold red, black, and white color scheme
- ✨ **Smooth Animations** - Powered by Framer Motion
- 🎵 **Full Sound System** - Background music, hover sounds, and select sounds
- 📱 **Responsive Design** - Works on desktop and mobile
- 🎮 **Interactive Views** - Items, Skills, Personas, Status, and System screens
- 🎬 **Video Background** - Dynamic background support

This project showcases modern React patterns, context-based state management, and advanced CSS animations while paying homage to one of gaming's most distinctive UIs.

---

## ✨ Features

### 🎨 Visual Design
| Feature | Description |
|---------|-------------|
| **Authentic P5 Style** | Iconic red/black/white color scheme with skewed typography |
| **Animated Transitions** | Smooth page transitions using Framer Motion |
| **Video Background** | Support for dynamic video backgrounds |
| **Responsive Layout** | Adapts to all screen sizes |
| **Custom Icons** | SVG-based icon system matching P5 aesthetic |

### 🎮 Interactive Views
| View | Description |
|------|-------------|
| **Items** | Browse inventory items with P5 styling |
| **Skills** | View character skills and abilities |
| **Persona** | Persona collection and management |
| **Status** | Character stats and information |
| **System** | Settings and configuration menu |

### 🎵 Audio System
| Feature | Description |
|---------|-------------|
| **Background Music** | Looping BGM with toggle control |
| **Hover Sounds** | Audio feedback on menu hover |
| **Select Sounds** | Confirmation sound on selection |
| **Global Volume** | Mute/unmute all sounds |
| **HTML5 Audio** | Reliable playback with Howler.js |

### ⚙️ Settings
| Feature | Description |
|---------|-------------|
| **SFX Toggle** | Enable/disable sound effects |
| **BGM Toggle** | Enable/disable background music |
| **Keyboard Controls** | ESC to navigate back |
| **State Persistence** | Settings saved via Context API |

---

## 📸 Screenshots

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   ╔═══════════════════════════════════════════════════╗ │
│   ║                                                   ║ │
│   ║          PERSONA 5 MENU SYSTEM                    ║ │
│   ║                                                   ║ │
│   ║   > ITEMS     [Animated red highlight]            ║ │
│   ║     SKILLS                                        ║ │
│   ║     PERSONA                                       ║ │
│   ║     STATUS                                        ║ │
│   ║     SYSTEM                                        ║ │
│   ║                                                   ║ │
│   ║   [Video Background]                              ║ │
│   ║   [Animated Transitions]                          ║ │
│   ║                                                   ║ │
│   ╚═══════════════════════════════════════════════════╝ │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

### Core
- **[React 19.2.4](https://react.dev/)** - UI library
- **[Vite 8.0.4](https://vitejs.dev/)** - Build tool and dev server
- **[Framer Motion 12.38.0](https://www.framer.com/motion/)** - Animation library

### Audio
- **[use-sound 5.0.0](https://github.com/joshwcomeau/use-sound)** - React sound hooks
- **[Howler.js](https://howlerjs.com/)** - Audio library

### Development
- **ESLint** - Code linting
- **React Refresh** - Fast refresh during development

---

## 🚀 Installation

### Prerequisites

- **Node.js 18+**
- **npm** or **yarn**

### Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd mi-persona5-web

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5173`

---

## 🎮 Usage

### Navigation
- **Mouse**: Click menu items to navigate
- **Keyboard**: Press `ESC` to return to main menu
- **Controls**: Use settings panel to toggle audio

### Views
1. **Items** - View inventory and items
2. **Skills** - Browse character skills
3. **Persona** - Manage persona collection
4. **Status** - View character statistics
5. **System** - Access settings and options

---

## 📁 Project Structure

```
mi-persona5-web/
├── public/                    # Static assets
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/               # Images, sounds, videos
│   │   └── sounds/
│   │       ├── bgm.mp3
│   │       ├── hover.mp3
│   │       └── select.mp3
│   │
│   ├── components/           # React components
│   │   ├── P5Menu.jsx        # Main menu component
│   │   ├── P5MenuItem.jsx    # Menu item component
│   │   ├── P5VideoBackground.jsx
│   │   ├── ItemsView.jsx
│   │   ├── SkillsView.jsx
│   │   ├── PersonaView.jsx
│   │   ├── StatusView.jsx
│   │   └── SystemView.jsx
│   │
│   ├── context/              # React Context
│   │   └── SettingsContext.jsx
│   │
│   ├── App.jsx               # Main app component
│   ├── App.css               # App styles
│   ├── index.css             # Global styles
│   └── main.jsx              # Entry point
│
├── index.html                # HTML template
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint configuration
├── package.json              # Dependencies
└── README.md                 # This file
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 🎵 Sound System

The app includes a full audio system:

### Audio Files
- **Background Music** (`bgm.mp3`) - Plays continuously
- **Hover Sound** (`hover.mp3`) - Menu hover feedback
- **Select Sound** (`select.mp3`) - Selection confirmation

### Controls
- **SFX Toggle** - Sound effects on/off
- **BGM Toggle** - Background music on/off
- **Auto-resume** - Audio context resumes on user interaction

### Implementation
```jsx
// Sound is managed through use-sound and Howler.js
const [playHover] = useSound(hoverSfx, { volume: 0.4 });
const [playSelect] = useSound(selectSfx, { volume: 0.5 });
```

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Guidelines
- Follow existing code style and conventions
- Test your changes with `npm run lint`
- Keep the P5 aesthetic authentic
- Add comments for complex logic

---

## 📄 License

This project is licensed under the **MIT License** - see below for details.

**Note:** This is a fan-made project inspired by Persona 5. All game assets, sounds, and intellectual property belong to their respective owners (Atlus/Sega). This project is for educational and portfolio purposes only.

---

## 🙏 Acknowledgments

- **[Atlus](https://atlus.com/)** - For creating the amazing Persona 5 game
- **[Sega](https://www.sega.com/)** - For publishing Persona 5
- **[Framer Motion](https://www.framer.com/motion/)** - For smooth animations
- **[Vite](https://vitejs.dev/)** - For fast development experience
- **[React](https://react.dev/)** - For the UI library

---

## ⚠️ Disclaimer

This is an **unofficial fan project** created for educational and portfolio purposes only.

- **Persona 5** is a trademark of **Atlus**
- All game assets, music, and intellectual property belong to their respective owners
- This project is not affiliated with or endorsed by Atlus or Sega
- No copyright infringement intended

**Support the official release:** [Persona 5 Royal](https://persona5atlus.com/)

---

## 📊 Quick Stats

| Metric | Value |
|--------|-------|
| **React Version** | 19.2.4 |
| **Build Tool** | Vite 8.0.4 |
| **Animations** | Framer Motion 12.38.0 |
| **Audio** | use-sound + Howler.js |
| **Lines of Code** | ~1000+ |
| **Components** | 9 React components |
| **Views** | 5 interactive screens |

---

<p align="center">
  <strong>Made with ❤️ and React</strong><br>
  <em>Take Your Heart - Persona 5 Fan Project</em><br>
  <strong>⭐ 2026 ⭐</strong>
</p>
