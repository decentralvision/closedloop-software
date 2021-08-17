import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PortableText from '@sanity/block-content-to-react';
import styled from 'styled-components';
import serializers from '../serializers';
import { Wrapper, SectionTitle, ScrollFade } from '../components';

const query = graphql`
    query DeskQuery {
        desk: sanityDesk {
            title
            scrollId
            _rawContent
        }
    }
`;

const StyledDesk = styled.section`
    margin-top: -64px;
    padding-top: var(--space-64);

    header {
        border-bottom: 1px solid var(--secondary);

        @media (min-width: 1280px) {
            border-right: 1px solid var(--secondary);
            border-bottom: none;
            position: relative;
            width: 100%;
            overflow: hidden;
            ::before {
                position: absolute;
                content: '';
                height: var(--space-48);
                top: 0;
                right: 0;
                bottom: 0;
                border-right: 1px solid var(--secondary);
                animation: draw-line-Y 3s infinite;
                box-shadow: 2px 2px 2px 2px var(--secondary);
            }
        }
    }
`;

const StyledGrid = styled.div`
    background-color: var(--primary);
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));

    @media (min-width: 1280px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

export default function Desk() {
    const { desk } = useStaticQuery(query);
    const { title, scrollId, _rawContent } = desk;

    return (
        <StyledDesk id={scrollId}>
            <StyledGrid>
                <header>
                    <Wrapper>
                        <ScrollFade>
                            <SectionTitle title={title} />
                        </ScrollFade>
                    </Wrapper>
                </header>
                <Wrapper>
                    <ScrollFade>
                        <PortableText blocks={_rawContent} serializers={serializers} />
                    </ScrollFade>
                </Wrapper>
            </StyledGrid>
        </StyledDesk>
    );
}
