const fs = require('fs');
const path = require('path');

const configPath = path.resolve(__dirname, '../luminas.config.js');
const outputPath = path.resolve(__dirname, '../src/_generated_config.scss');

// Default config if none exists (fallback)
const defaultConfig = {
    theme: {
        colors: {},
        glass: {},
        spacing: {},
        typography: {},
        borderRadius: {},
    }
};

let config = defaultConfig;

if (fs.existsSync(configPath)) {
    try {
        config = require(configPath);
        console.log('Loaded luminas.config.js');
    } catch (e) {
        console.error('Error loading luminas.config.js:', e);
    }
} else {
    console.log('No luminas.config.js found, using defaults.');
}

let scssContent = '// Auto-generated from luminas.config.js\n\n:root {\n';

// Helper to flatten object keys for CSS variables
function generateCssVariables(obj, prefix = '-') {
    let vars = '';
    for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            vars += generateCssVariables(obj[key], `${prefix}-${key}`);
        } else {
            vars += `    ${prefix}-${key}: ${obj[key]};\n`;
        }
    }
    return vars;
}

// Generate CSS Variables for Colors
if (config.theme.colors) {
    scssContent += '    // Colors\n';
    for (const [name, value] of Object.entries(config.theme.colors)) {
        scssContent += `    --color-${name}: ${value};\n`;
        // Also generate RGB values for opacity handling if needed (Tailwind style)
        // For simplicity, we just use the raw value for now.
    }
}

// Generate CSS Variables for Glass settings
if (config.theme.glass) {
    scssContent += '    // Glassmorphism\n';
    scssContent += generateCssVariables(config.theme.glass, '--glass');
}

// Generate CSS Variables for Spacing
if (config.theme.spacing) {
    scssContent += '    // Spacing\n';
    for (const [name, value] of Object.entries(config.theme.spacing)) {
        scssContent += `    --spacing-${name}: ${value};\n`;
    }
}

// Generate CSS Variables for Typography
if (config.theme.typography) {
    scssContent += '    // Typography\n';
    if (config.theme.typography.fontFamily) {
        for (const [name, value] of Object.entries(config.theme.typography.fontFamily)) {
            scssContent += `    --font-${name}: ${value};\n`;
        }
    }
    if (config.theme.typography.fontSize) {
        for (const [name, value] of Object.entries(config.theme.typography.fontSize)) {
            scssContent += `    --text-${name}: ${value};\n`;
        }
    }
}

// Generate CSS Variables for Border Radius
if (config.theme.borderRadius) {
    scssContent += '    // Border Radius\n';
    for (const [name, value] of Object.entries(config.theme.borderRadius)) {
        const varName = name === 'DEFAULT' ? '' : `-${name}`;
        scssContent += `    --rounded${varName}: ${value};\n`;
    }
}


scssContent += '}\n\n';

// --- Utility Classes Generation (Simplistic approach for SCSS) ---
// In a real framework, we might use SCSS maps, but here we can pre-generate some common classes
// specific to our "Luminas" identity that rely on these vars.

scssContent += '// Generated Utilities\n\n';

// Glass Utilities
if (config.theme.glass) {
    scssContent += `.glass-panel {\n`;
    scssContent += `    background: rgba(255, 255, 255, var(--glass-opacity-medium, 0.45));\n`;
    scssContent += `    backdrop-filter: blur(var(--glass-blur-md, 12px));\n`;
    scssContent += `    -webkit-backdrop-filter: blur(var(--glass-blur-md, 12px));\n`;
    scssContent += `    border: var(--glass-border-width, 1px) solid var(--glass-border-color, rgba(255,255,255,0.4));\n`;
    scssContent += `}\n\n`;
}

// Color Utilities (Backgrounds and Text)
if (config.theme.colors) {
    for (const [name, value] of Object.entries(config.theme.colors)) {
        scssContent += `.bg-${name} { background-color: var(--color-${name}); }\n`;
        scssContent += `.text-${name} { color: var(--color-${name}); }\n`;
        scssContent += `.border-${name} { border-color: var(--color-${name}); }\n`;
    }
}

// Spacing Utilities (Margin & Padding - simplified subset for demo)
// Tailwind already handles this via @tailwind utilities, but we can add specific overwrites or custom ones if needed.
// For now, we rely on Tailwind for standard utilities, but we expose the variables for SCSS usage.

fs.writeFileSync(outputPath, scssContent);
console.log(`Generated SCSS config at ${outputPath}`);
