import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import MapEdgesToNodes from '../lib/map-edges-to-nodes';
import { ArticleCard } from '../components';

export const query = graphql`
    query CarouselQuery {
        article: allSanityArticle(sort: { fields: [date, title], order: DESC }, limit: 4) {
            edges {
                node {
                    id
                    title
                    excerpt
                    slug {
                        current
                    }
                    image {
                        asset {
                            fluid(maxWidth: 384, maxHeight: 384) {
                                ...GatsbySanityImageFluid
                            }
                        }
                    }
                }
            }
        }
    }
`;

const StyledGrid = styled.div`
    display: grid;
    gap: var(--space-24);

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: var(--space-32);
    }

    @media (min-width: 1280px) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: var(--space-48);
    }

    @media (min-width: 1536px) {
        gap: var(--space-64);
    }
`;

const StyledWrapper = styled.div`
    background-color: var(--primary);
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

const StyledHeader = styled.h2`
    text-transform: uppercase;
    font-size: var(--space-48);
    margin-bottom: var(--space-64);
    font-weight: 600;
`;

export default function Carousel() {
    const { article } = useStaticQuery(query);
    const articles = MapEdgesToNodes(article);

    return (
        <StyledWrapper>
            <StyledHeader>Latest Articles</StyledHeader>

            <StyledGrid>
                {articles.map((item) => (
                    <ArticleCard
                        key={item.id}
                        slug={item.slug}
                        title={item.title}
                        excerpt={item.excerpt}
                        image={item.image}
                    />
                ))}
            </StyledGrid>
        </StyledWrapper>
    );
}
