import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import PortableText from '@sanity/block-content-to-react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { SEO, Intro, Wrapper, ScrollFade } from '../components';
import serializers from '../serializers';

export const query = graphql`
    query ($slug: String!) {
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
                    gatsbyImageData(
                        width: 1920
                        height: 512
                        layout: FULL_WIDTH
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                    )
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

    aside {
        background-color: var(--primary);
    }
`;

export default function ArticleTemplate({ data, pageContext, location }) {
    const isFirstMount = !location.action;
    const article = data && data.article;
    const { next, prev, prevTitle, nextTitle } = pageContext;
    const image = getImage(article.image.asset.gatsbyImageData);

    return (
        <>
            <SEO title={article.title} description={article.excerpt} />

            <motion.section key={location.key} exit={{ opacity: 0 }}>
                {isFirstMount && <Intro />}
                <motion.div variants={content(isFirstMount)} animate="animate" initial="initial">
                    <StyledArticle>
                        <GatsbyImage image={image} alt={article.title} />

                        <StyledContainer>
                            <aside />
                            <article>
                                <ScrollFade>
                                    <Wrapper>
                                        <h1>{article.title}</h1>

                                        <div className="meta">
                                            <h3>By {article.author.name}</h3>
                                            <span>{article.date}</span>
                                        </div>

                                        <PortableText
                                            blocks={article._rawContent}
                                            serializers={serializers}
                                        />
                                    </Wrapper>
                                </ScrollFade>
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
    data: PropTypes.any.isRequired,
    pageContext: PropTypes.any.isRequired,
    location: PropTypes.object.isRequired,
};
