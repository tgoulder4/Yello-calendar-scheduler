/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: { max: "1200px" },
        // @media (max-width:1200px) {...}
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "wooden-table": "url('/assets/table.jpg')",
        phone: "url('/assets/phone.svg')",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      scale: {
        175: "1.75",
      },
      maxWidth: {
        "1/2": "50%",
      },
    },
  },
  plugins: [],
};
