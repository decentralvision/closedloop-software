import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../components/logo';
import Burger from '../components/burger';
import Menu from '../components/menu';

const StyledAside = styled.aside`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--space-64);
    padding: var(--space-0) var(--space-16);
    z-index: 50;

    @media (min-width: 768px) {
        position: fixed;
        top: 0;
        left: 0;
        background-color: var(--white);
        border-right: 1px solid var(--gray-800);
        border-bottom: none;
        height: 100vh;
        width: var(--space-96);
        min-width: var(--space-96);
        padding: var(--space-32) var(--space-0);
        flex-direction: column;
    }
`;

const Aside = () => {
    const [open, setOpen] = useState(false);

    return (
        <StyledAside>
            <Logo />
            <nav aria-label="Main navigation">
                <Menu open={open} setOpen={setOpen} />
                <Burger open={open} setOpen={setOpen} />
            </nav>
        </StyledAside>
    );
};

export default Aside;
