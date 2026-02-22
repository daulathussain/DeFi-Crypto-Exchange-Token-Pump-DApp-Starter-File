/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          red:    "#ff2200",   // primary accent — replaces green
          cyan:   "#00d4ff",   // info / pending
          purple: "#bf00ff",   // sending / processing
          pink:   "#ff0080",   // error / highlight
          yellow: "#f3b71e",   // warning
        },
        dark: {
          950: "#040810",      // deepest bg
          900: "#080c14",      // main background
          800: "#0a0f19",      // card background
          700: "#0f1624",      // elevated card
          600: "#141c2e",      // hover state
          500: "#1a2438",      // border
        },
      },
      fontFamily: {
        sans:    ["'Space Mono'", "'Courier New'", "monospace"],
        mono:    ["'Space Mono'", "'Courier New'", "monospace"],
        display: ["Orbitron", "monospace"],
      },
      animation: {
        "pulse-neon":   "pulseNeon 2s ease-in-out infinite",
        "pulse-pink":   "pulsePink 2s ease-in-out infinite",
        "scan-line":    "scanLine 4s linear infinite",
        "fade-in":      "fadeIn 0.4s ease forwards",
        "slide-up":     "slideUp 0.35s ease forwards",
        "border-flow":  "borderFlow 2s linear infinite",
        "spin-slow":    "spin 8s linear infinite",
        "float":        "float 4s ease-in-out infinite",
        "glitch":       "glitch1 3s infinite",
      },
      keyframes: {
        pulseNeon: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255,34,0,0.5)" },
          "50%":      { boxShadow: "0 0 0 8px rgba(255,34,0,0)" },
        },
        pulsePink: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255,34,0,0.4)" },
          "50%":      { boxShadow: "0 0 0 8px rgba(255,34,0,0)" },
        },
        scanLine: {
          "0%":   { top: "0", opacity: "0.6" },
          "90%":  { opacity: "0.6" },
          "100%": { top: "100vh", opacity: "0" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        borderFlow: {
          "0%":   { backgroundPosition: "0% 50%" },
          "50%":  { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-8px)" },
        },
        glitch1: {
          "0%, 90%, 100%": { transform: "none", opacity: "0" },
          "91%":           { transform: "translate(-2px, 0)", opacity: "0.7" },
          "93%":           { transform: "translate(2px, 0)", opacity: "0.7" },
          "95%":           { transform: "translate(-1px, 0)", opacity: "0.7" },
        },
      },
      boxShadow: {
        "neon-red":    "0 0 20px rgba(255,34,0,0.4), 0 0 40px rgba(255,34,0,0.15)",
        "neon-cyan":   "0 0 20px rgba(0,212,255,0.3), 0 0 40px rgba(0,212,255,0.1)",
        "neon-purple": "0 0 20px rgba(191,0,255,0.3), 0 0 40px rgba(191,0,255,0.1)",
        "cyber-card":  "0 4px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,34,0,0.05)",
      },
      backgroundImage: {
        "neon-gradient":  "linear-gradient(135deg, #ff2200 0%, #ff0080 100%)",
        "cyber-gradient": "linear-gradient(135deg, #ff2200 0%, #bf00ff 50%, #00d4ff 100%)",
        "card-gradient":  "linear-gradient(180deg, #0a0f19 0%, #080c14 100%)",
      },
    },
  },
  plugins: [],
};
