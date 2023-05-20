/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      'colors': {
        'dark-700': '#191A21',
        'dark-600': '#21222C',
        'dark-500': '#282A36',
        'dark-400': '#3d4051',
        'dark-300': '#44475A',
        'dark-200': '#505262',
        'dark-100': '#5A6795',
        'comment': '#6272a4',
        'white': '#F8F8F2',
        'white-75a': 'hsla(0,0%,100%,.75)',
        'white-50a': 'hsla(0,0%,100%,.5)',
        'white-10a': 'hsla(0,0%,100%,.1)',
        'white-5a': 'hsla(0,0%,100%,.05)',
        'blue': '#8be9fd',
        'blue-highlight': 'rgba(139, 233, 253, 0.25)',
        'lightGreen': '#b1ffc5',
        'green': '#50fa7b',
        'green-highlight': 'rgba(80, 250, 123, 0.25)',
        'red': '#ff5555',
        'red-highlight': 'rgba(255, 85, 85, 0.25)',
        'lightRed': '#ff6a6c',
        'darkRed': '#e83538',
        'orange': '#ffb86c',
        'pink': '#ff79c6',
        'yellow': '#f1fa8c',
        'purple': '#bd93f9',
        'cta': '#5865F2',
        'ctaDark': '#4a57e4',
        'ctaLight': '#6470f3',
        'dangerColor': '#ff4d4f',
        'dangerBg': '#301923',
        'dangerBorder': '#8c0e2e',
        'successColor': '#0be881',
        'successBg': '#17312a',
        'successBorder': '#0d8951',
        'warningColor': '#ffcf00',
        'warningBg': '#302c1d',
        'warningBorder': '#8e7710',
        'primaryColor': '#1890ff',
        'primaryBg': '#172636',
        'primaryBorder': '#0d518f',
      },
      fontFamily: {
        'mono': ['Menlo', 'Fira Mono', 'Courier New'],
        'sans': ['SF Pro Display', 'Roboto', 'Arial', 'sans-serif']
      },
      gridTemplateColumns: {
        'commands': '1fr 1fr'
      },
      boxShadow: {
        'item-selected': '0 0 0 1px #4a57e4'
      }
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')
  ],
}
