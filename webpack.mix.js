let mix = require('laravel-mix');
// your Wordpress theme name here
var themename = "veritaworld"; // rename theme name
const themePath = '.';
const resources = themePath + '/src';
mix.setPublicPath(`${themePath}/assets`);

mix.sass(`${resources}/scss/app.scss`, `${themePath}/assets/css`).sourceMaps();
mix.js(`${resources}/js/app.js`, `${themePath}/assets/js`)

mix.browserSync({
    proxy: "http://veritaworld", // paste your local url
    files: [
        `${themePath}/**/*.php`,
        `${themePath}/**/*.js`,
        `${themePath}/**/*.css`,
    ]
});