import type { Config } from 'tailwindcss'

const config: Config = {
    content: ['./src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#6B58FD',
                background: '#F5F7FA',
                foreground: '#1B2027',
                'muted-foreground': '#5A615F',
                accent: '#64729B12',
                'top1-text': '#523800',
                'top2-text': '#393838',
                'top3-text': '#4F3322',
            },
            fontFamily: {
                sans: ['Figtree', 'sans-serif'],
                editorial: ['"Playfair Display"', 'serif'],
            },
            letterSpacing: {
                '3xl': '-0.45px',
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #7593FF, #6B58FD, #6503DE)',
                top1: 'var(--gradient-top1)',
                top2: 'var(--gradient-top2)',
                top3: 'var(--gradient-top3)',
            },
            animation: {
                floatCard:
                    'floatCard var(--float-duration) ease-in-out var(--float-delay) infinite',
                fadeInCard: 'fadeInCard 0.7s ease-out var(--fade-delay) both',
            },
            keyframes: {
                floatCard: {
                    '0%, 100%': { transform: 'var(--base-transform) translateY(0px)' },
                    '50%': { transform: 'var(--base-transform) translateY(-12px)' },
                },
                fadeInCard: {
                    from: { opacity: '0', transform: 'var(--base-transform) translateY(20px)' },
                    to: {
                        opacity: 'var(--target-opacity)',
                        transform: 'var(--base-transform) translateY(0px)',
                    },
                },
            },
        },
    },
    plugins: [],
}

export default config
