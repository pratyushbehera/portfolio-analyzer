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
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        float1: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-20px) translateX(10px)" },
        },
        float2: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(20px) translateX(-10px)" },
        },
        float3: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-10px) translateX(-20px)" },
        },
      },
      animation: {
        float1: "float1 8s ease-in-out infinite",
        float2: "float2 10s ease-in-out infinite",
        float3: "float3 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
