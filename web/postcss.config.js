const autoprefixer = require('autoprefixer');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = () => ({
    plugins: [
        autoprefixer(),
        postcssPresetEnv({
            browsers: ['>0.25%', 'not ie 11', 'not op_mini all'],
        }),
    ],
});
