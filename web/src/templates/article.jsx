import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import PortableText from '@sanity/block-content-to-react';
import Img from 'gatsby-image';
import { motion } from 'framer-motion';
import { SEO, Intro } from '../components';
import serializers from '../serializers';

export const query = graphql`
    query($slug: String!) {
        article: sanityArticle(slug: { current: { eq: $slug } }) {
            id
            title
            excerpt
            date(formatString: "MMMM DD, YYYY")
            _rawContent
            slug {
                current
            }
            author {
                name
            }
            image {
                asset {
                    fluid(maxWidth: 1280) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
        }
    }
`;

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

export default function ArticleTemplate({ data, pageContext, location }) {
    const isFirstMount = !location.action;
    const article = data && data.article;
    const { next, prev, prevTitle, nextTitle } = pageContext;

    return (
        <>
            <SEO title={article.title} description={article.excerpt} image={article.image.asset} />

            <motion.section key={location.key} exit={{ opacity: 0 }}>
                {isFirstMount && <Intro />}
                <motion.div variants={content(isFirstMount)} animate="animate" initial="initial">
                    <motion.div variants={container}>
                        <div>
                            <Img fluid={article.image.asset.fluid} alt={article.title} />
                            <h2>{article.title}</h2>
                            <p>{article.excerpt}</p>
                            <PortableText blocks={article._rawContent} serializers={serializers} />
                        </div>

                        <ul>
                            <li>
                                {prev && (
                                    <Link className="prev" to={`../${prev.slug.current}/`}>
                                        <span>Previous</span>
                                        <h2>{prevTitle}</h2>
                                    </Link>
                                )}
                            </li>
                            <li>
                                {next && (
                                    <Link className="next" to={`../${next.slug.current}/`}>
                                        <span>Next</span>
                                        <h2>{nextTitle}</h2>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>
            </motion.section>
        </>
    );
}

ArticleTemplate.propTypes = {
    data: PropTypes.node.isRequired,
    pageContext: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired,
};
