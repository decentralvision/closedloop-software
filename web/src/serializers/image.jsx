import React from 'react';
import { getGatsbyImageData } from 'gatsby-source-sanity';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function Image({ node }) {
    const gatsbyImageData = getGatsbyImageData(
        node,
        { maxWidth: 1280 },
        {
            projectId: process.env.GATSBY_SANITY_PROJECT_ID,
            dataset: process.env.GATSBY_SANITY_DATASET,
        },
    );
    return <GatsbyImage image={gatsbyImageData} />;
}
