import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { IoChatbox } from 'react-icons/io5';
import wordmark from '../images/wordmark.svg';

const StyledNav = styled.nav`
    display: none;

    @media (min-width: 768px) {
        position: sticky;
        top: 0;
        z-index: 50;
        background-color: var(--primary);
        border-bottom: 1px solid var(--gray-500);
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: var(--space-96);
    }

    .logo {
        padding: var(--space-0) var(--space-48);

        @media (min-width: 1024px) {
            padding: var(--space-0) var(--space-64);
        }

        @media (min-width: 1280px) {
            padding: var(--space-0) var(--space-96);
        }

        @media (min-width: 1536px) {
            padding: var(--space-0) var(--space-128);
        }

        img {
            max-width: var(--space-80);
        }
    }

    .contact {
        display: flex;
        padding: var(--space-0) var(--space-64);

        span {
            font-size: var(--space-16);
            font-weight: 600;
            color: var(--gray-600);
        }

        svg {
            margin-left: var(--space-24);
            font-size: var(--space-24);
            color: var(--gray-600);
        }
    }
`;

export default function Nav() {
    return (
        <StyledNav>
            <div className="logo">
                <img src={wordmark} alt="individ" />
            </div>
            <Link className="contact" to="/contact/">
                <span>Let&apos;s talk</span>
                <IoChatbox />
            </Link>
        </StyledNav>
    );
}
