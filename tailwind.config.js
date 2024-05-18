/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: 
  {
    extend: 
    {
      spacing: 
      {
        logoSize: "100px",
        perfilPadding: "75rem",
        width100vw: "100vw",
      },
      colors: 
      {
        gold: '#FFD700',
      },
    },
  },
  plugins: [],
}
