const path = require('path');

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.individ.rocks',
    },
    flags: {
        DEV_SSR: false,
    },
    plugins: [
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: process.env.SANITY_PROJECT_ID,
                dataset: process.env.SANITY_DATASET,
                token: process.env.SANITY_TOKEN,
                watchMode: !isProd,
            },
        },
        'gatsby-plugin-no-sourcemaps',
        'gatsby-plugin-netlify',
        'gatsby-plugin-netlify-cache',
        'gatsby-plugin-smoothscroll',
        'gatsby-plugin-postcss',
        'gatsby-plugin-styled-components',
        'gatsby-plugin-netlify',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-offline',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: path.join(__dirname, 'src', 'images'),
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Individ',
                short_name: 'Individ',
                description:
                    'A specialist multimedia agency that envisions and executes design for iconic brands across the world. Bold disruptors and creative craftsmen, we bring messages to life through an array of mobile and digital product offerings that propel communication forward.',
                start_url: '/',
                background_color: '#fff',
                theme_color: '#000',
                display: 'standalone',
                icon: 'src/images/icon.svg',
            },
        },
        {
            resolve: 'gatsby-plugin-google-gtag',
            options: {
                trackingIds: [process.env.GA_TRACKING_ID],
                pluginConfig: {
                    head: true,
                },
            },
        },
    ],
};
