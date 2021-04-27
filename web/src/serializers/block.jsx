import React from 'react';
import PropTypes from 'prop-types';

export default function Block({ node, children }) {
    switch (node.style) {
        case 'h1': {
            return <h1>{children}</h1>;
        }
        case 'h2': {
            return <h2>{children}</h2>;
        }
        default:
            return <p>{children}</p>;
    }
}

Block.propTypes = {
    node: PropTypes.any.isRequired,
    children: PropTypes.node.isRequired,
};
