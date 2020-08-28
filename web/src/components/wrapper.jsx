import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: var(--space-0) var(--space-16);

    @media (min-width: 768px) {
        padding: var(--space-0) var(--space-32);
        justify-content: center;
    }
`;

function Wrapper({ children }) {
    return <StyledWrapper>{children}</StyledWrapper>;
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Wrapper;
