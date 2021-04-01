import React from 'react';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledMenu = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--gray-800);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin-top: var(--space-64);
    overflow: hidden;
    z-index: 10;

    @media (min-width: 768px) {
        height: 100%;
        margin-left: var(--space-96);
        margin-top: var(--space-96);
        min-height: 100vh;
    }

    ul {
        display: flex;
        flex-direction: column;
        min-width: 100%;
        white-space: nowrap;

        li {
            padding: var(--space-0) var(--space-24);

            @media (min-width: 768px) {
                padding: var(--space-16) var(--space-128);
            }
        }
    }

    h1 {
        text-transform: uppercase;
        font-size: var(--space-24);
        font-weight: 700;
        color: var(--gray-100);

        @media (min-width: 768px) {
            font-size: var(--space-32);
        }

        @media (min-width: 1024px) {
            font-size: var(--space-48);
        }

        @media (min-width: 1280px) {
            font-size: var(--space-80);
        }
    }
`;

const menuVariants = {
    opened: {
        width: '100%',
        transition: {
            duration: 0.4,
        },
    },
    closed: {
        width: '0%',
        transition: {
            duration: 0.4,
        },
    },
};

const Menu = ({ open, setOpen }) => {
    const isHidden = !!open;
    const links = [
        'Brand In Hand',
        'On Your Desk',
        'Adaptive Video',
        'Supporting Platforms',
        'Articles',
    ];

    if (open) {
        document.body.style.position = 'fixed';
        document.body.style.top = `0`;
        document.body.style.right = `0`;
        document.body.style.bottom = `0`;
        document.body.style.left = `0`;
    } else {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    }

    return (
        <StyledMenu
            open={open}
            aria-hidden={!isHidden}
            as={motion.div}
            initial={{ width: '0%' }}
            variants={menuVariants}
            animate={open ? 'opened' : 'closed'}
        >
            <ul>
                {links.map((link) => (
                    <li key={link}>
                        <Link onClick={() => setOpen(!open)} to={`/${link.toLowerCase()}`}>
                            <h1>{link}</h1>
                        </Link>
                    </li>
                ))}
            </ul>
        </StyledMenu>
    );
};

Menu.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.object.isRequired,
};

export default Menu;
