import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme"
import animate from "tailwindcss-animate";

const config: Config = {
    darkMode: "class",
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./lib/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                layer: {
                    base: "#f4f4f5",
                    border: "#d4d4d8",
                    active: "#3b82f6",
                    muted: "#9ca3af",
                },
            },
            borderRadius: {
                xl: "1rem",
                "2xl": "1.5rem",
            },
        },
    },
    plugins: [animate],
};

export default config;
