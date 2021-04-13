import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    padding: var(--space-48) var(--space-24);

    @media (min-width: 768px) {
        padding: var(--space-64) var(--space-48);
    }

    @media (min-width: 1024px) {
        padding: var(--space-128) var(--space-64);
    }

    @media (min-width: 1280px) {
        padding: var(--space-144) var(--space-96);
    }

    @media (min-width: 1536px) {
        padding: var(--space-176) var(--space-128);
    }
`;

function Wrapper({ children }) {
    return <StyledWrapper>{children}</StyledWrapper>;
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Wrapper;
