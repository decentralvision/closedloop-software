import Typography from 'typography';

const typography = new Typography({
    baseFontSize: '16px',
    baseLineHeight: 1.5,
    headerFontFamily: ['Roboto Condensed', 'sans-serif'],
    bodyFontFamily: ['Roboto', 'sans-serif'],
});

typography.injectStyles();

export default typography;
