/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["../**/*.html", "./src/**/*.scss"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Space Grotesk"', 'sans-serif'],
                mono: ['"JetBrains Mono"', 'monospace'],
            },
            colors: {
                // Luminas specific palette if needed
            }
        },
    },
    plugins: [],
}
