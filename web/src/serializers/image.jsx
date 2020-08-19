import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';

export default function Image(props) {
    const { asset, alt } = props;

    const fluidProps = getFluidGatsbyImage(
        asset.ref,
        { maxWidth: 1280 },
        {
            projectId: process.env.GATSBY_SANITY_PROJECT_ID,
            dataset: process.env.GATSBY_SANITY_DATASET,
        },
    );
    return <Img fluid={fluidProps} alt={alt} />;
}

Image.propTypes = {
    asset: PropTypes.node.isRequired,
    alt: PropTypes.string.isRequired,
};
