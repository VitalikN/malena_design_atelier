import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'PhotoView-Slider__Backdrop PhotoView-Slider__ArrowLeft PhotoView-Slider__ArrowRight PhotoView-Slider__BannerWrap  PhotoView-Slider__toolbarIcon ',
    'text-gradient',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '680px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      transitionDuration: {
        '400': '400ms',
      },
      scale: {
        '115': '1.15',
      },
      colors: {
        backgroundButton: '#f8f3f0',
        buttonHover: '#d4b5a0',
        mainBg: '#fdfcfa',
        navBg: '#f8f3f0',

        colorText: '#3f3936',
        borderColor: '#c59f4a',
        gradientFrom: '#886924',
        gradientVia: '#c59f4a',
        gradientTo: '#a27c2f',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      backgroundImage: {
        'gradient-text': 'linear-gradient(90deg, #886924, #c59f4a, #a27c2f)',
      },
      fontSize: {
        '8': ['8px', '24px'],
        '12': ['12px', '16px'],
        '14': ['14px', '16px'],
        '16': ['16px', '18px'],
        '18': ['18px', '24px'],
        '20': ['20px', '24px'],
        '22': ['22px', '24px'],
        '24': ['24px', '28px'],
        '26': ['26px', '28px'],
        '30': ['30px', '32px'],
        '32': ['32px', '34px'],
        '34': ['34px', '38px'],
        '36': ['36px', '38px'],
        '38': ['38px', '40px'],
        '40': ['40px', '48px'],
        '46': ['46px', '48px'],
        '50': ['50px', '54px'],
        '56': ['56px', '72px'],
        '64': ['64px', '80px'],
        '106': ['106px', '48px'],
        '128': ['128px', '88px'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
