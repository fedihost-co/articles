/** @type {import('tailwindcss').Config} */
export default {
  fontFamily: {
    sans: ['Roboto', 'sans-serif'],
  },
  daisyui: {
    themes: [
      {
        fedihost_theme: {
          "primary": "#394867",
          "secondary": "#ccd5e2",
          "accent": "#2a8ef8",
          "neutral": "#0e172b",
          "base-100": "#f7f9fb",
          "base-200": "#e1e7ef",
          "base-300": "#93a3b7",
          "info": "#1e293a",
          "success": "#10b580",
          "warning": "#fab774",
          "error": "#ec4444",
          "base-content": "#0e172b",
        }
      }
    ],
  },


  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
