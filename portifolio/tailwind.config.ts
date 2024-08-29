import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:
      {
        'azul-royal':'#4169E1',
        'roxo-escuro':'#4B0082',
        'cinza-claro':'#F5F5F5',
        'branco':'#FFFFFF',
        'azul-claro':'#87CEEB',
        'lavanda':'#E6E6FA'
      },
    },
  },
  plugins: [],
};
export default config;
