import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { divider } from './animations';

const StyledDivider = styled.div`
    width: 100%;
    height: var(--space-1);
    background-color: var(--gray-300);
`;

function Divider() {
    return (
        <motion.div initial="initial" animate="animate" variants={divider}>
            <StyledDivider />
        </motion.div>
    );
}

export default Divider;
