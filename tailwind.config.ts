import { nextui } from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007bff', // Blue
        secondary: '#ffc107', // Yellow
        success: '#28a745', // Green
        info: '#00c7cf', // Cyan
        warning: '#ffc107', // Use the same yellow for warning
        danger: '#dc3545', // Red
        light: '#f8f9fa', // Light gray
        textcolor: '#3e3e3e',
        dark: '#212529', // Dark gray
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [nextui()],
};

export default config;
