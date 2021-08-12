import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../components/logo';
import Burger from '../components/burger';
import Menu from '../components/menu';

import { Social } from '../components';

const StyledAside = styled.aside`
    position: sticky;
    top: 0;
    background-color: var(--primary);
    border-bottom: 1px solid var(--gray-500);
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
        border-right: 1px solid var(--gray-500);
        border-bottom: none;
        height: 100vh;
        width: var(--space-96);
        min-width: var(--space-96);
        padding: var(--space-32) var(--space-0);
        flex-direction: column;

        ::before {
            position: absolute;
            content: '';
            height: var(--space-48);
            top: 0;
            right: 0;
            bottom: 0;
            border-right: 1px solid var(--secondary);
            animation: draw-line-Y 3s infinite;
            box-shadow: 1px 1px 1px 1px var(--secondary);
        }
    }
`;

const Aside = () => {
    const [open, setOpen] = useState(false);

    return (
        <StyledAside>
            <Logo />
            <nav aria-label="Main navigation">
                <Menu open={open} setOpen={setOpen} />

                {document.location.pathname === '/' ? (
                    <Burger open={open} setOpen={setOpen} />
                ) : (
                    <span />
                )}
            </nav>
            <Social />
        </StyledAside>
    );
};

export default Aside;
