// tailwind.config.js
import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#f3f3f3",
        dark: "#040c17",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // you can add more custom colors
      },
      fontFamily: {
        // Add your custom fonts
        urbanist: ['Urbanist', ...defaultTheme.fontFamily.sans],
        satoshi:  ['Satoshi',  ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

export default config
