import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PortableText from '@sanity/block-content-to-react';
import styled from 'styled-components';
import serializers from '../serializers';
import { Wrapper, SectionTitle } from '../components';

const query = graphql`
    query SolutionsQuery {
        solutions: sanitySolutions {
            title
            scrollId
            _rawContent
        }
    }
`;

const StyledSolutions = styled.section`
    margin-top: -64px;
    padding-top: var(--space-64);
`;

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));

    @media (min-width: 1280px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

export default function Solutions() {
    const { solutions } = useStaticQuery(query);
    const { title, scrollId, _rawContent } = solutions;

    return (
        <StyledSolutions id={scrollId}>
            <StyledGrid>
                <Wrapper>
                    <SectionTitle title={title} />
                </Wrapper>
                <Wrapper>
                    <PortableText blocks={_rawContent} serializers={serializers} />
                </Wrapper>
            </StyledGrid>
        </StyledSolutions>
    );
}
