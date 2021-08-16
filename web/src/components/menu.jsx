import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const query = graphql`
    query MenuQuery {
        menu: sanityMenu {
            navItems {
                title
                scrollId
            }
        }
    }
`;

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

    @media (min-width: 768px) {
        height: 100%;
        margin-left: var(--space-96);
        min-height: 100vh;
    }

    ul {
        display: flex;
        flex-direction: column;
        min-width: 100%;
        white-space: nowrap;
    }

    button {
        text-transform: uppercase;
        font-size: var(--space-24);
        font-weight: 700;
        color: var(--gray-100);
        text-align: left;
        width: 100%;
        height: var(--space-96);
        padding: var(--space-0) var(--space-24);

        @media (min-width: 768px) {
            font-size: var(--space-32);
            padding: var(--space-0) var(--space-128);
        }

        @media (min-width: 1024px) {
            font-size: var(--space-48);
        }

        @media (min-width: 1280px) {
            font-size: var(--space-64);
        }
    }
`;

const menuVariants = {
    opened: {
        width: '100%',
        transition: {
            duration: 0.4,
            ease: 'easeIn',
        },
    },
    closed: {
        width: '0%',
        transition: {
            duration: 0.4,
            ease: 'easeOut',
        },
    },
};

export const slideIn = {
    initial: { width: 0 },
    whileHover: {
        width: '100%',
        transition: {
            duration: 0.6,
            delay: 1,
            ease: 'easeIn',
        },
    },
};

const Menu = ({ open, setOpen }) => {
    const { menu } = useStaticQuery(query);
    const { navItems } = menu;

    const handleClick = (id) => {
        setOpen(!open);
        scrollTo(`#${id}`);
    };

    return (
        <StyledMenu
            open={open}
            as={motion.div}
            initial={{ width: '0%' }}
            variants={menuVariants}
            animate={open ? 'opened' : 'closed'}
        >
            <ul>
                {navItems.map((item, index) => (
                    <motion.li
                        key={index}
                        whileHover={{
                            backgroundColor: 'var(--secondary)',
                            transition: {
                                ease: 'easeIn',
                                duration: '0.2',
                            },
                        }}
                    >
                        <motion.button
                            type="button"
                            onClick={() => handleClick(item.scrollId)}
                            whileHover={{
                                x: 32,
                                transition: {
                                    type: 'spring',
                                    duration: 0.2,
                                },
                            }}
                        >
                            {item.title}
                        </motion.button>
                    </motion.li>
                ))}
            </ul>
        </StyledMenu>
    );
};

Menu.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
};

export default Menu;
