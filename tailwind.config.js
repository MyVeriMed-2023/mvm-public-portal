module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'app-color': 'linear-gradient(180deg, #0c5087 0%, #289c43 100%)',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 10s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-80%)' },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
