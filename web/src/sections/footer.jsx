import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import PortableText from '@sanity/block-content-to-react';
import serializers from '../serializers';

const StyledFooter = styled.footer`
    background-color: var(--gray-700);

    position: relative;
    z-index: 20;
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
        padding: var(--space-64) var(--space-128);
    }
`;

const StyledLinks = styled.ul`
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-template-rows: repeat(3, minmax(0, 1fr));
    margin-top: var(--space-64);

    @media (min-width: 768px) {
        row-gap: var(--space-0);
        grid-auto-flow: column;
    }

    &:last-child {
        grid-row: span 1 / span 1;
    }

    li {
        grid-column: span 12 / span 12;
        align-self: flex-start;
        color: var(--gray-300);
        font-weight: 600;
        text-transform: uppercase;
        margin-top: var(--space-16);

        @media (min-width: 768px) {
            grid-column: span 6 / span 6;
        }

        @media (min-width: 1024px) {
            grid-column: span 4 / span 4;
        }

        &:hover {
            color: var(--gray-200);
        }
    }
`;

const StyledNotice = styled.div`
    padding: var(--space-24) var(--space-24);
    border-top: 1px solid var(--gray-500);

    @media (min-width: 768px) {
        padding: var(--space-24) var(--space-64);
    }

    @media (min-width: 1024px) {
        padding: var(--space-24) var(--space-96);
    }

    @media (min-width: 1280px) {
        padding: var(--space-24) var(--space-128);
    }

    p {
        color: var(--gray-300);
        font-size: var(--space-16);
    }
`;

const StyledTitle = styled.div`
    p {
        color: var(--gray-300);
        text-transform: uppercase;
        margin-bottom: var(--space-8);

        @media (min-width: 768px) {
            row-gap: var(--space-0);
            grid-auto-flow: column;
            margin-bottom: var(--space-16);
        }
    }

    h2 {
        color: var(--gray-300);
        text-transform: uppercase;
        font-size: var(--space-32);

        strong {
            font-weight: 900;
        }

        @media (min-width: 768px) {
            font-size: var(--space-48);
        }
    }
`;

const query = graphql`
    query FooterQuery {
        footer: sanityFooter {
            _rawTitle
            suptitle
            list
        }
    }
`;

export default function Footer() {
    const { footer } = useStaticQuery(query);
    const { _rawTitle, suptitle, list } = footer;

    return (
        <StyledFooter>
            <StyledWrapper>
                <StyledTitle>
                    <p>{suptitle}</p>
                    <h2>
                        <PortableText blocks={_rawTitle} serializers={serializers} />
                    </h2>
                </StyledTitle>

                <StyledLinks>
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </StyledLinks>
            </StyledWrapper>

            <StyledNotice>
                <p>© Copyright Individ {new Date().getFullYear()}. All rights reserved.</p>
            </StyledNotice>
        </StyledFooter>
    );
}
