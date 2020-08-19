import React from 'react';
import PropTypes from 'prop-types';

export default function ExternalLink({ mark, children }) {
    const { blank, href } = mark;
    return blank ? (
        <a href={href} rel="noopener nofollow noreferrer" target="_blank">
            {children}
        </a>
    ) : (
        <a href={href}>{children}</a>
    );
}

ExternalLink.propTypes = {
    mark: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
};
