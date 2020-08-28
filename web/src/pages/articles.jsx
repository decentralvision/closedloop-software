import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { motion } from 'framer-motion';
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
            duration: 0.7,
            ease: [0.6, -0.05, 0.01, 0.99],
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
                            fluid(maxWidth: 384) {
                                ...GatsbySanityImageFluid
                            }
                        }
                    }
                }
            }
        }
    }
`;

const ArticleCard = ({ slug, title, excerpt, image }) => {
    return (
        <Link to={`/${slug.current}/`}>
            <article>
                <header>
                    <Img fluid={image.asset.fluid} alt={title} />
                    <h3>{title}</h3>
                    <p>{excerpt}</p>
                </header>
            </article>
        </Link>
    );
};

const ArticlePage = (props) => {
    const { data, location } = props;
    const isFirstMount = !location.action;
    const articles = data && data.article && MapEdgesToNodes(data.article);

    return (
        <>
            <SEO title="Articles" />

            <motion.section exit={{ opacity: 0 }}>
                {isFirstMount && <Intro />}
                <motion.div variants={content(isFirstMount)} animate="animate" initial="initial">
                    <motion.div variants={container}>
                        {articles.map((item) => (
                            <ArticleCard
                                key={item.id}
                                slug={item.slug}
                                title={item.title}
                                excerpt={item.excerpt}
                                image={item.image}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </motion.section>
        </>
    );
};

export default ArticlePage;

ArticlePage.propTypes = {
    data: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired,
};

ArticleCard.propTypes = {
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
};
