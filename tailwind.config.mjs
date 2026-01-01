/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark mode (default)
        dark: {
          bg: {
            primary: '#0D1117',
            secondary: '#161B22',
            tertiary: '#21262D',
          },
          text: {
            primary: '#E6EDF3',
            secondary: '#8B949E',
            muted: '#6E7681',
          },
          code: {
            bg: '#1C2128',
            border: '#30363D',
          },
        },
        // Light mode
        light: {
          bg: {
            primary: '#FFFFFF',
            secondary: '#F6F8FA',
            tertiary: '#EAEEF2',
          },
          text: {
            primary: '#1F2328',
            secondary: '#656D76',
            muted: '#8C959F',
          },
          code: {
            bg: '#F6F8FA',
            border: '#D0D7DE',
          },
        },
        // Accent colors
        accent: {
          blue: '#58A6FF',
          'blue-light': '#0969DA',
          green: '#7EE787',
          'green-light': '#1A7F37',
          yellow: '#D29922',
          red: '#F85149',
        },
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'Cascadia Code', 'monospace'],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            '--tw-prose-body': theme('colors.dark.text.primary'),
            '--tw-prose-headings': theme('colors.dark.text.primary'),
            '--tw-prose-lead': theme('colors.dark.text.secondary'),
            '--tw-prose-links': theme('colors.accent.blue'),
            '--tw-prose-bold': theme('colors.dark.text.primary'),
            '--tw-prose-counters': theme('colors.dark.text.secondary'),
            '--tw-prose-bullets': theme('colors.dark.text.muted'),
            '--tw-prose-hr': theme('colors.dark.code.border'),
            '--tw-prose-quotes': theme('colors.dark.text.primary'),
            '--tw-prose-quote-borders': theme('colors.accent.blue'),
            '--tw-prose-captions': theme('colors.dark.text.secondary'),
            '--tw-prose-code': theme('colors.accent.green'),
            '--tw-prose-pre-code': theme('colors.dark.text.primary'),
            '--tw-prose-pre-bg': theme('colors.dark.code.bg'),
            '--tw-prose-th-borders': theme('colors.dark.code.border'),
            '--tw-prose-td-borders': theme('colors.dark.code.border'),
            color: theme('colors.dark.text.primary'),
            strong: {
              color: theme('colors.dark.text.primary'),
              fontWeight: '600',
            },
            em: {
              color: theme('colors.dark.text.primary'),
            },
            code: {
              fontFamily: theme('fontFamily.mono').join(', '),
              fontFeatureSettings: '"liga" 1',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            a: {
              color: theme('colors.accent.blue'),
              textDecoration: 'underline',
              '&:hover': {
                color: theme('colors.accent.green'),
              },
            },
            h1: { color: theme('colors.dark.text.primary') },
            h2: { color: theme('colors.dark.text.primary') },
            h3: { color: theme('colors.dark.text.primary') },
            h4: { color: theme('colors.dark.text.primary') },
            blockquote: {
              color: theme('colors.dark.text.primary'),
              borderLeftColor: theme('colors.accent.blue'),
            },
            'thead th': {
              color: theme('colors.dark.text.primary'),
            },
            'tbody td': {
              color: theme('colors.dark.text.primary'),
            },
          },
        },
        invert: {
          css: {
            '--tw-prose-body': theme('colors.light.text.primary'),
            '--tw-prose-headings': theme('colors.light.text.primary'),
            '--tw-prose-links': theme('colors.accent.blue-light'),
            '--tw-prose-bold': theme('colors.light.text.primary'),
            '--tw-prose-code': theme('colors.accent.green-light'),
            '--tw-prose-pre-bg': theme('colors.light.code.bg'),
            color: theme('colors.light.text.primary'),
            strong: {
              color: theme('colors.light.text.primary'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
