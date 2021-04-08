import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import MapEdgesToNodes from '../lib/map-edges-to-nodes';
import { ArticleCard, Wrapper, SectionTitle } from '../components';

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
    margin-top: var(--space-64);

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

const StyledCarousel = styled.section`
    background-color: var(--primary);
`;

export default function Carousel() {
    const { article } = useStaticQuery(query);
    const articles = MapEdgesToNodes(article);

    return (
        <StyledCarousel>
            <Wrapper>
                <SectionTitle title="Latest Articles" />

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
            </Wrapper>
        </StyledCarousel>
    );
}
