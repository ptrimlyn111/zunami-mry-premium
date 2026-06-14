import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./actions/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { bottle: "#0F3D2E", gold: "#D4AF37", midnight: "#050806", ivory: "#F5F2E8" },
      fontFamily: { display: ["var(--font-display)", "serif"], sans: ["var(--font-sans)", "Inter", "sans-serif"] },
      boxShadow: { glow: "0 0 80px rgba(212,175,55,.25)", bottle: "0 20px 80px rgba(15,61,46,.45)" },
      backgroundImage: { luxury: "radial-gradient(circle at 20% 10%, rgba(212,175,55,.16), transparent 28%), radial-gradient(circle at 80% 0%, rgba(15,61,46,.55), transparent 35%), linear-gradient(135deg,#030403,#07120d 45%,#010101)" }
    }
  },
  plugins: [require("tailwindcss-animate")]
};
export default config;
