import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PortableText from '@sanity/block-content-to-react';
import styled from 'styled-components';
import serializers from '../serializers';

const query = graphql`
    query DeskQuery {
        desk: sanityDesk {
            title
            _rawContent
        }
    }
`;

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    background-color: var(--primary);

    @media (min-width: 1280px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    header {
        border-bottom: 1px solid var(--gray-300);

        @media (min-width: 1280px) {
            border-right: 1px solid var(--secondary);
            border-bottom: none;
        }

        h2 {
            text-transform: uppercase;
            font-size: var(--space-48);
            font-weight: 600;
        }

        ul {
            margin-top: var(--space-48);

            li {
                text-transform: uppercase;
            }
        }
    }
`;

const StyledWrapper = styled.div`
    padding: var(--space-48) var(--space-24);

    @media (min-width: 768px) {
        padding: var(--space-64) var(--space-48);
    }

    @media (min-width: 1024px) {
        padding: var(--space-128) var(--space-64);
    }

    @media (min-width: 1280px) {
        padding: var(--space-144) var(--space-96);
    }

    @media (min-width: 1536px) {
        padding: var(--space-176) var(--space-128);
    }
`;

export default function Desk() {
    const { desk } = useStaticQuery(query);
    const { title, _rawContent } = desk;

    return (
        <StyledContainer>
            <header>
                <StyledWrapper>
                    <h2>{title}</h2>
                </StyledWrapper>
            </header>
            <section>
                <StyledWrapper>
                    <PortableText blocks={_rawContent} serializers={serializers} />
                </StyledWrapper>
            </section>
        </StyledContainer>
    );
}
