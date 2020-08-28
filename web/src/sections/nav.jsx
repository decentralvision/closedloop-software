import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledNav = styled.nav`
    border-bottom: 1px solid var(--gray-300);

    ul {
        display: flex;
        align-items: center;
        justify-content: center;

        li {
            padding: var(--space-16);
        }
    }
`;

export default function Nav() {
    return (
        <StyledNav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact/">Contact</Link>
                </li>
                <li>
                    <Link to="/articles/">Articles</Link>
                </li>
            </ul>
        </StyledNav>
    );
}
