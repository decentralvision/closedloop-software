import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PortableText from '@sanity/block-content-to-react';
import styled from 'styled-components';
import serializers from '../serializers';
import { Wrapper } from '../components';

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
    background-color: var(--primary);

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

export default function Welcome() {
    const { welcome } = useStaticQuery(query);

    return (
        <StyledContainer>
            <Wrapper>
                <header>
                    <h2>{welcome.title}</h2>
                    <PortableText blocks={welcome._rawDescription} serializers={serializers} />
                </header>
                <section>
                    <PortableText blocks={welcome._rawContent} serializers={serializers} />
                </section>
            </Wrapper>
        </StyledContainer>
    );
}
