import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSecondary = styled.span`
    color: var(--secondary);
    word-break: break-all;
`;

export default function Secondary({ children }) {
    return <StyledSecondary>{children}</StyledSecondary>;
}

Secondary.propTypes = {
    children: PropTypes.node.isRequired,
};
