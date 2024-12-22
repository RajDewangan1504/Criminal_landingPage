/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'frame': "url('/public/assets/frame.png')",  // Reference image in the public folder
      },
      borderRadius: {
        '4xl': '2rem',   // Example of adding custom border radius
        '5xl': '3rem',   // Add more as needed
        '6xl' : '4rem',
      },
      fontSize: {
        '4xl': '2.75rem', // Slightly larger than default
        '5xl': '3.25rem',
        '6xl': '4.25rem',
      },
     
    },
  },
  plugins: [],
};