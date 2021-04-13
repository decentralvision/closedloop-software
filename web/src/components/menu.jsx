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
                padding: var(--space-0) var(--space-128);
            }
        }
    }

    button {
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
                    <li key={index}>
                        <button type="button" onClick={() => handleClick(item.scrollId)}>
                            {item.title}
                        </button>
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
