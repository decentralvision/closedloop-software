import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { slideIn } from './animations';

const StyledDivider = styled.div`
    width: 100%;
    height: var(--space-1);
    background-color: var(--gray-400);
`;

function Divider() {
    return (
        <motion.div initial="initial" animate="animate" variants={slideIn}>
            <StyledDivider />
        </motion.div>
    );
}

export default Divider;
