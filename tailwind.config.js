/** @type {import('tailwindcss').Config} */
export default {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx,css}"],
  theme: {
     screens: {
        xs: "360px", // Extra small screens (phones)
        sm: "640px", // Small screens (tablets)
        md: "768px", // Medium screens (small laptops)
        lg: "1024px", // Large screens (desktops)
        xl: "1280px", // Extra large screens (large desktops)
      },
        bg: {
          white: "var(--color-bg-white)",
          LimeGreen: "var(--color-bg-LimeGreen)",
        },
  },
  plugins: [],
};
