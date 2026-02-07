# ✨ Luminas UI

[![npm version](https://img.shields.io/npm/v/luminas-ui.svg?style=flat-square&color=8b5cf6)](https://www.npmjs.com/package/luminas-ui)
[![License: ISC](https://img.shields.io/badge/License-ISC-3b82f6.svg?style=flat-square)](https://opensource.org/licenses/ISC)
[![Framework: Tailwind](https://img.shields.io/badge/Framework-Tailwind-f59e0b.svg?style=flat-square)](https://tailwindcss.com)

**Luminas UI** is a premium, high-performance UI library designed for visionaries.

> *"Normal is boring. Beauty is crazy."*

It merges ethereal **Glassmorphism** aesthetics with rock-solid utility, powered by Tailwind CSS and custom SCSS engines.

[**🌐 Visit the Showcase**](https://lab.tnidu.com/luminas)

---

## 🚀 Key Features

- **💎 Advanced Glassmorphism**: Pre-configured heavy and light glass panels with optimized backdrop blurs.
- **✨ Creative Effects**: Mouse-tracking "Spotlight" buttons and ambient "Color Shifting" gradient animations.
- **🗓️ Smart Components**: Built-in Date and Time pickers with vibrant gradient selection logic.
- **🎨 Config-Driven**: Fully customizable via `luminas.config.js` – control your entire design system from one file.
- **⚡ Blazing Fast**: Optimized build process using `esbuild` and `Sass`.

---

## 📦 Installation

Install Luminas UI via npm:

```bash
npm install luminas-ui
```

### Direct Link (Development)
If you're working in the same environment:
```bash
npm install /path/to/luminas-ui
```

---

## 🛠️ Quick Start

### 1. Single Import (Recommended)
You can import the entire framework (Styles + Logic) with a single line. This will automatically inject the CSS and initialize interactive components.

```javascript
import 'luminas-ui';
```

### 2. Manual Import (Advanced)
If you prefer to separate styles and logic or use a custom build process:

```javascript
// Import specific CSS file
import 'luminas-ui/dist/luminas.css';

// Import JS logic only (interactive components)
import 'luminas-ui/dist/luminas.js';
```

### 3. Usage

#### **The Spotlight Button**
A button that follows your mouse with a glowing spotlight effect.
```html
<button class="l-btn l-btn-spotlight">
  Explore Beyond
</button>
```

#### **Glass Cards**
Premium frosted glass panels with smooth hover transitions.
```html
<div class="l-card p-8">
  <h3 class="text-xl font-bold">Glassmorphism Lite</h3>
  <p>Precision engineered frosted glass that doesn't kill performance.</p>
</div>
```

#### **Date & Time Pickers**
Feature-rich pickers with gradient selection states.
```html
<!-- Date Picker -->
<div class="l-datepicker">
  <input type="text" class="l-input-date" readonly placeholder="YYYY-MM-DD">
</div>

<!-- Time Picker -->
<div class="l-timepicker">
  <input type="text" class="l-input-time" readonly placeholder="HH:MM">
</div>
```

---

## ⚙️ Customization

Customize the entire framework by creating/editing `luminas.config.js` in your project root:

```javascript
module.exports = {
    theme: {
        colors: {
            primary: '#8b5cf6',   // Purple
            secondary: '#3b82f6', // Blue
            accent: '#f59e0b',    // Amber
        },
        glass: {
            blur: {
                heavy: '40px',
                light: '12px'
            }
        }
    }
};
```

---

## 📝 Documentation

Luminas UI uses a specialized CSS class naming convention prefixed with `l-`:

| Component | Class | Description |
| --- | --- | --- |
| **Button** | `.l-btn` | Base button component |
| **Spotlight** | `.l-btn-spotlight` | Interactive mouse-tracking glow |
| **Card** | `.l-card` | Glassmorphic floating card |
| **Input** | `.l-input` | Standard glass-styled input |
| **Date Picker** | `.l-datepicker` | Wrapper for the date picker |
| **Time Picker** | `.l-timepicker` | Wrapper for the time picker |

---

## 🤝 Community & Support

Built with ❤️ by **Tnidu Inc.** for the next generation of web visionaries.

- **Author**: GhostTNIDU
- **License**: ISC

---

*Luminas UI – Build Beyond Expectations.*
