module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: { min: "200px", max: "768px" },
        // => @media (min-width: 200px and max-width: 768px) { ... }
        md: { min: "769px", max: "940px" },
        // => @media (min-width: 769px and max-width: 990px) { ... }
        lg: { min: "941px" },
        // => @media (min-width: 991px ) { ... }
      },
    },
  },
  plugins: [],
}