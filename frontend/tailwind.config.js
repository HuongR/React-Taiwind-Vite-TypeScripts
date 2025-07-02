/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
      },
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        card: "var(--color-card)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        muted: "var(--color-muted)",
        accent: "var(--color-accent)",
        destructive: "var(--color-destructive)",
        input: "var(--color-input)",
        border: "var(--color-border)",
        ring: "var(--color-ring)",

        "chart-1": "var(--color-chart-1)",
        sidebar: "var(--color-sidebar)",
        "sidebar-accent": "var(--color-sidebar-accent)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
