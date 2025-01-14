import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "680px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },

    extend: {
      colors: {
        backgroundButton: "#f8f3f0",
        buttonHover: "#d4b5a0",
        mainBg: "#fdfcfa",
        navBg: "#f8f3f0",
        colorText: "#3f3936",
        borderColor: "#c59f4a",
        gradientFrom: "#886924",
        gradientVia: "#c59f4a",
        gradientTo: "#a27c2f",
      },
      backgroundImage: {
        "gradient-text": "linear-gradient(90deg, #886924, #c59f4a, #a27c2f)",
      },
      fontSize: {
        "8": ["8px", "24px"],
        "12": ["12px", "16px"],
        "14": ["14px", "16px"],
        "16": ["16px", "18px"],
        "18": ["18px", "24px"],
        "20": ["20px", "24px"],
        "24": ["24px", "28px"],
        "23": ["23px", "32px"],
        "26": ["26px", "28px"],
        "30": ["30px", "48px"],
        "32": ["32px", "80px"],
        "34": ["34px", "48px"],
        "40": ["40px", "48px"],
        "56": ["56px", "72px"],
        "64": ["64px", "80px"],
        "106": ["106px", "48px"],
        "128": ["128px", "88px"],
      },
    },
  },
  plugins: [],
} satisfies Config;
