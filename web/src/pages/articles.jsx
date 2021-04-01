import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import MapEdgesToNodes from '../lib/map-edges-to-nodes';
import { SEO, Intro } from '../components';

const content = (isFirstMount) => ({
    animate: {
        transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2 : 0 },
    },
});

const container = {
    initial: { y: -20, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: 'easeIn',
        },
    },
};

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

const StyledWrapper = styled.div`
    padding: var(--space-48) var(--space-24);

    @media (min-width: 768px) {
        padding: var(--space-48);
    }

    @media (min-width: 1024px) {
        padding: var(--space-64);
    }

    @media (min-width: 1280px) {
        padding: var(--space-96);
    }

    @media (min-width: 1536px) {
        padding: var(--space-128);
    }
`;

const StyledCard = styled.div`
    min-height: var(--space-176);

    @media (min-width: 768px) {
        min-height: var(--space-320);
    }

    img {
        filter: grayscale(1);
        z-index: -1;
    }

    article {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: var(--space-24) var(--space-0);
    }

    h3 {
        color: var(--gray-900);
        font-size: var(--space-20);
        font-weight: 600;
        margin-bottom: var(--space-20);
    }

    p {
        color: var(--gray-700);
        font-size: var(--space-16);
    }
`;

const ArticleCard = ({ slug, title, excerpt, image }) => (
    <Link to={`/${slug.current}/`}>
        <StyledCard>
            <Img fluid={image.asset.fluid} alt={title} />
            <article>
                <h3>{title}</h3>
                <p>{excerpt}</p>
            </article>
        </StyledCard>
    </Link>
);

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
                    <StyledWrapper>
                        <StyledGrid as={motion.div} variants={container}>
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

ArticleCard.propTypes = {
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
};
