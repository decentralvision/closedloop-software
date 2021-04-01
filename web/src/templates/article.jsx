import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import PortableText from '@sanity/block-content-to-react';
import Img from 'gatsby-image';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { SEO, Intro } from '../components';
import serializers from '../serializers';

export const query = graphql`
    query($slug: String!) {
        article: sanityArticle(slug: { current: { eq: $slug } }) {
            id
            title
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
                    fluid(maxWidth: 1920, maxHeight: 320) {
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
            duration: 0.6,
            ease: 'easeIn',
        },
    },
};

const Navigation = styled.ul`
    display: flex;
    flex-direction: column;
    border-top: 1px solid var(--gray-300);

    @media (min-width: 768px) {
        flex-direction: row;
    }

    li {
        display: flex;
        flex: 1 1 0%;

        &:last-of-type {
            border-top: 1px solid var(--gray-300);
            text-align: right;

            @media (min-width: 768px) {
                border-top: none;
                border-left: 1px solid var(--gray-300);
            }
        }

        &:hover {
            background-color: var(--gray-50);
        }
    }

    .next,
    .prev {
        width: 100%;
        padding: var(--space-24);

        @media (min-width: 768px) {
            padding: var(--space-48);
        }

        @media (min-width: 1024px) {
            padding: var(--space-96);
        }

        @media (min-width: 1280px) {
            padding: var(--space-128);
        }

        h2 {
            color: var(--gray-700);
            font-size: var(--space-24);
            margin-top: var(--space-8);
        }

        span {
            text-transform: uppercase;
            color: var(--gray-400);
        }
    }

    .next {
        span {
            justify-content: flex-end;
        }
    }
`;

const StyledArticle = styled.div`
    article {
        grid-column: span 3 / span 3;
        padding: var(--space-24);
        border-left: 1px solid var(--gray-300);

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

        h1 {
            font-size: var(--space-32);
            font-weight: 600;
            text-transform: uppercase;

            @media (min-width: 768px) {
                font-size: var(--space-64);
            }
        }

        .meta {
            margin: var(--space-48) var(--space-0);

            h3 {
                font-size: var(--space-20);
                margin-bottom: var(--space-12);
                font-weight: 600;
            }
        }

        p {
            margin-top: var(--space-32);
        }
    }
`;

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));

    @media (min-width: 1280px) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
`;

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
                    <StyledArticle as={motion.div} variants={container}>
                        <header>
                            <Img fluid={article.image.asset.fluid} alt={article.title} />
                        </header>

                        <StyledContainer>
                            <aside />
                            <article>
                                <h1>{article.title}</h1>

                                <div className="meta">
                                    <h3>By {article.author.name}</h3>
                                    <span>{article.date}</span>
                                </div>

                                <PortableText
                                    blocks={article._rawContent}
                                    serializers={serializers}
                                />
                            </article>
                        </StyledContainer>

                        <Navigation>
                            <li>
                                {prev && (
                                    <Link className="prev" to={`../${prev.slug.current}`}>
                                        <span>Previous</span>
                                        <h2>{prevTitle}</h2>
                                    </Link>
                                )}
                            </li>
                            <li>
                                {next && (
                                    <Link className="next" to={`../${next.slug.current}`}>
                                        <span>Next</span>
                                        <h2>{nextTitle}</h2>
                                    </Link>
                                )}
                            </li>
                        </Navigation>
                    </StyledArticle>
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
