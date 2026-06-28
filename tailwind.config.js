export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { anifine: { bg: '#090909', primary: '#E53935', accent: '#FFC107' } },
      fontFamily: { display: ['Sora', 'sans-serif'], sans: ['Inter', 'sans-serif'] },
      boxShadow: { glass: '0 24px 80px rgba(0,0,0,.38)', red: '0 18px 60px rgba(229,57,53,.28)' },
    },
  },
  plugins: [],
};
