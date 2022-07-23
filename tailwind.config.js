/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: '#0f0f0f',
        darker: '#0a0a0a'
      },
      spacing: {
        "10%": "10%",
        "25%": "25%",
        "50%": "50%",
        "75%": "75%",
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1536px"
      },
      fontFamily: {
        sora: ["Sora"]
      }
    },
  },
  plugins: [],
}
