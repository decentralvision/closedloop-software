import React from 'react';
import styled from 'styled-components';
import { Divider, SectionTitle } from '../components';

const StyledFooter = styled.footer`
    background-color: var(--gray-700);
`;

const StyledWrapper = styled.div`
    padding: var(--space-48) var(--space-24);

    @media (min-width: 768px) {
        padding: var(--space-48) var(--space-64);
    }

    @media (min-width: 1024px) {
        padding: var(--space-48) var(--space-96);
    }

    @media (min-width: 1280px) {
        padding: var(--space-48) var(--space-128);
    }
`;

const StyledLinks = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-template-rows: repeat(1, minmax(0, 1fr));
    row-gap: var(--space-32);
    margin-top: var(--space-64);

    @media (min-width: 768px) {
        row-gap: var(--space-0);
        grid-auto-flow: column;
    }

    ul {
        grid-column: span 12 / span 12;
        align-self: flex-start;

        @media (min-width: 768px) {
            grid-column: span 6 / span 6;
        }

        @media (min-width: 1024px) {
            grid-column: span 4 / span 4;
        }

        &:last-child {
            grid-row: span 1 / span 1;
        }

        li {
            color: var(--gray-300);
            font-weight: 600;
            text-transform: uppercase;
            margin-top: var(--space-8);

            :first-child {
                margin-top: var(--space-0);
            }

            &:hover {
                color: var(--gray-200);
            }
        }
    }
`;

const StyledNotice = styled.div`
    padding: var(--space-16) var(--space-24);

    @media (min-width: 768px) {
        padding: var(--space-16) var(--space-64);
    }

    @media (min-width: 1024px) {
        padding: var(--space-16) var(--space-96);
    }

    @media (min-width: 1280px) {
        padding: var(--space-16) var(--space-128);
    }

    p {
        color: var(--gray-200);
        font-size: var(--space-16);
    }
`;

export default function Footer() {
    return (
        <StyledFooter>
            <StyledWrapper>
                <SectionTitle title={'Strategy\nApplication'} suptitle="services" light />

                <StyledLinks>
                    <ul>
                        <li>INDIVID.IO</li>
                        <li>INDIVID.DATA</li>
                        <li>INDIVID.CACHE</li>
                    </ul>
                    <ul>
                        <li>SMS</li>
                        <li>MMS</li>
                        <li>IN-APP</li>
                    </ul>
                    <ul>
                        <li>SOCIAL</li>
                        <li>ONLINE</li>
                    </ul>
                </StyledLinks>
            </StyledWrapper>

            <Divider />

            <StyledNotice>
                <p>© Copyright Individ {new Date().getFullYear()}. All rights reserved.</p>
            </StyledNotice>
        </StyledFooter>
    );
}
