import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PortableText from '@sanity/block-content-to-react';
import styled from 'styled-components';
import serializers from '../serializers';
import { Wrapper, SectionTitle, ScrollFade } from '../components';

const query = graphql`
    query PlatformsQuery {
        platforms: sanityPlatforms {
            title
            scrollId
            list
            _rawContent
        }
    }
`;

const StyledPlatforms = styled.section`
    margin-top: -64px;
    padding-top: var(--space-64);

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

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    background-color: var(--primary);

    @media (min-width: 1280px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

export default function Platforms() {
    const { platforms } = useStaticQuery(query);
    const { title, scrollId, list, _rawContent } = platforms;

    return (
        <StyledPlatforms id={scrollId}>
            <StyledGrid>
                <header>
                    <Wrapper>
                        <ScrollFade>
                            <SectionTitle title={title} />
                            <ul>
                                {list.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </ScrollFade>
                    </Wrapper>
                </header>
                <Wrapper>
                    <ScrollFade>
                        <PortableText blocks={_rawContent} serializers={serializers} />
                    </ScrollFade>
                </Wrapper>
            </StyledGrid>
        </StyledPlatforms>
    );
}
