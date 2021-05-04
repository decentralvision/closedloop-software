import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import MapEdgesToNodes from '../lib/map-edges-to-nodes';
import { ArticleCard, Wrapper, SectionTitle, ScrollFade } from '../components';

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
                            gatsbyImageData(
                                width: 1024
                                height: 1024
                                placeholder: BLURRED
                                formats: [AUTO, WEBP, AVIF]
                            )
                        }
                    }
                }
            }
        }
        carousel: sanityCarousel {
            title
            scrollId
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
    margin-top: -64px;
    padding-top: var(--space-64);
`;

export default function Carousel() {
    const { article, carousel } = useStaticQuery(query);
    const { title, scrollId } = carousel;
    const articles = MapEdgesToNodes(article);

    return (
        <StyledCarousel id={scrollId} as={ScrollFade}>
            <Wrapper>
                <SectionTitle title={title} />

                <StyledGrid>
                    {articles.map((item) => (
                        <ArticleCard
                            key={item.id}
                            slug={item.slug}
                            title={item.title}
                            excerpt={item.excerpt}
                            banner={item.image.asset.gatsbyImageData}
                        />
                    ))}
                </StyledGrid>
            </Wrapper>
        </StyledCarousel>
    );
}
