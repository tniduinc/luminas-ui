module.exports = {
    theme: {
        colors: {
            primary: '#8b5cf6',   // Purple
            secondary: '#3b82f6', // Blue
            accent: '#f59e0b',    // Amber
            success: '#22c55e',
            warning: '#eab308',
            error: '#ef4444',
            surface: '#ffffff',
            background: '#fafafa',
            // Gray scale for UI
            slate: {
                50: '#f8fafc',
                100: '#f1f5f9',
                200: '#e2e8f0',
                300: '#cbd5e1',
                400: '#94a3b8',
                500: '#64748b',
                600: '#475569',
                700: '#334155',
                800: '#1e293b',
                900: '#0f172a',
            }
        },
        glass: {
            opacity: {
                low: '0.3',
                medium: '0.45',
                high: '0.65',
            },
            blur: {
                sm: '4px',
                md: '12px',
                lg: '24px',
                xl: '40px',
            },
            border: {
                color: 'rgba(255, 255, 255, 0.4)',
                width: '1px',
            },
        },
        spacing: {
            '0': '0px',
            '1': '0.25rem',
            '2': '0.5rem',
            '3': '0.75rem',
            '4': '1rem',
            '5': '1.25rem',
            '6': '1.5rem',
            '8': '2rem',
            '10': '2.5rem',
            '12': '3rem',
            '16': '4rem',
            '20': '5rem',
            '24': '6rem',
            '32': '8rem',
            '40': '10rem',
            '48': '12rem',
            '56': '14rem',
            '64': '16rem',
        },
        typography: {
            fontFamily: {
                sans: '"Space Grotesk", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
                mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            },
            fontSize: {
                xs: '0.75rem',
                sm: '0.875rem',
                base: '1rem',
                lg: '1.125rem',
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '5xl': '3rem',
                '6xl': '3.75rem',
                '7xl': '4.5rem',
                '8xl': '6rem',
                '9xl': '8rem',
            },
        },
        borderRadius: {
            none: '0',
            sm: '0.125rem',
            DEFAULT: '0.25rem',
            md: '0.375rem',
            lg: '0.5rem',
            xl: '0.75rem',
            '2xl': '1rem',
            '3xl': '1.5rem',
            full: '9999px',
        },
    },
};
