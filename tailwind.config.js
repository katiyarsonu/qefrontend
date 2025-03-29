// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx}"
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ['Inter', 'sans-serif'],
//         serif: ['Merriweather', 'serif'],
//         mono: ['Roboto Mono', 'monospace'],
//       },
//       colors: {
//         teal: {
//           50: '#f0fdfa',
//           100: '#ccfbf1',
//           200: '#99f6e4',
//           300: '#5eead4',
//           400: '#2dd4bf',
//           500: '#14b8a6',
//           600: '#0d9488',
//           700: '#0f766e',
//           800: '#115e59',
//           900: '#134e4a',
//         },
//       },
//     },
//   },
//   plugins: [],
// }



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      colors: {
        teal: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
      },
      // Add custom animation
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      // Add keyframes for the float animation
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};