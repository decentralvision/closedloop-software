import React from 'react';
import PropTypes from 'prop-types';

export default function Block({ node, children }) {
    switch (node.style) {
        case 'h2': {
            return <h2>{children}</h2>;
        }
        default:
            return <p>{children}</p>;
    }
}

Block.propTypes = {
    node: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
};
