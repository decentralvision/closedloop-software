import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PortableText from '@sanity/block-content-to-react';
import styled from 'styled-components';
import serializers from '../serializers';

const query = graphql`
    query WelcomeQuery {
        welcome: sanityWelcome {
            title
            _rawDescription
            _rawContent
        }
    }
`;

const StyledContainer = styled.div`
    width: 100%;
    background-color: var(--gray-100);

    header {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        text-align: right;

        h2 {
            font-size: var(--space-48);
            font-weight: 600;
        }
        p {
            max-width: 64ch;
            margin-top: var(--space-24);
        }
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        text-align: left;
        margin-top: var(--space-64);

        p {
            font-size: var(--space-24);
            font-weight: 600;
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

export default function Welcome() {
    const { welcome } = useStaticQuery(query);
    const { title, _rawDescription, _rawContent } = welcome;

    return (
        <StyledContainer>
            <StyledWrapper>
                <header>
                    <h2>{title}</h2>
                    <PortableText blocks={_rawDescription} serializers={serializers} />
                </header>
                <section>
                    <PortableText blocks={_rawContent} serializers={serializers} />
                </section>
            </StyledWrapper>
        </StyledContainer>
    );
}
