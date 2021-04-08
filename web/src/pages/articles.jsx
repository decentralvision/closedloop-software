import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import MapEdgesToNodes from '../lib/map-edges-to-nodes';
import { SEO, Intro, ArticleCard, Wrapper } from '../components';
import { fadeIn } from '../components/animations';

const content = (isFirstMount) => ({
    animate: {
        transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2 : 0 },
    },
});

export const query = graphql`
    query BlogPageQuery {
        article: allSanityArticle {
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

const ArticlePage = (props) => {
    const { data, location } = props;
    const isFirstMount = !location.action;
    const articles = data && data.article && MapEdgesToNodes(data.article);

    return (
        <>
            <SEO title="Articles" />

            <motion.section key={location.key} exit={{ opacity: 0 }}>
                {isFirstMount && <Intro />}
                <motion.div variants={content(isFirstMount)} animate="animate" initial="initial">
                    <Wrapper>
                        <StyledGrid as={motion.div} variants={fadeIn}>
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
                </motion.div>
            </motion.section>
        </>
    );
};

export default ArticlePage;

ArticlePage.propTypes = {
    data: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
};
