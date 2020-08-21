import React from 'react';
import styled from 'styled-components';

const StyledDivider = styled.div`
    width: 100%;
    height: var(--space-2);
    background-color: var(--gray-200);
`;

function Divider() {
    return <StyledDivider />;
}

export default Divider;
