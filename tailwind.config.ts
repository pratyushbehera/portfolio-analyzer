// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "zerodha-blue": "#387ed1",
        "profit-green": "#16a34a",
        "loss-red": "#dc2626",
      },
    },
  },
  plugins: [],
};
