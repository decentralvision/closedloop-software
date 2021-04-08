import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PortableText from '@sanity/block-content-to-react';
import styled from 'styled-components';
import serializers from '../serializers';
import { Wrapper, SectionTitle } from '../components';

const query = graphql`
    query PlatformsQuery {
        platforms: sanityPlatforms {
            title
            list
            _rawContent
        }
    }
`;

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    border-bottom: 1px solid var(--secondary);
    background-color: var(--primary);

    @media (min-width: 1280px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    header {
        border-bottom: 1px solid var(--secondary);

        @media (min-width: 1280px) {
            border-right: 1px solid var(--secondary);
            border-bottom: none;
        }

        ul {
            margin-top: var(--space-48);

            li {
                text-transform: uppercase;
            }
        }
    }
`;

export default function Platforms() {
    const { platforms } = useStaticQuery(query);
    const { title, list, _rawContent } = platforms;

    return (
        <StyledContainer>
            <header>
                <Wrapper>
                    <SectionTitle title={title} />
                    <ul>
                        {list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </Wrapper>
            </header>
            <Wrapper>
                <PortableText blocks={_rawContent} serializers={serializers} />
            </Wrapper>
        </StyledContainer>
    );
}
