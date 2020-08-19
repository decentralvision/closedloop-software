import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import PortableText from '@sanity/block-content-to-react';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import SEO from '../components/seo';
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

export default function ArticleTemplate({ data, pageContext }) {
    const article = data && data.article;
    const { next, prev, prevTitle, nextTitle } = pageContext;

    return (
        <Layout>
            <SEO title={article.title} description={article.excerpt} image={article.image.asset} />

            <section>
                <Img fluid={article.image.asset.fluid} alt={article.title} />
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
                <PortableText blocks={article._rawContent} serializers={serializers} />
            </section>

            <section>
                <ul>
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
                </ul>
            </section>
        </Layout>
    );
}

ArticleTemplate.propTypes = {
    data: PropTypes.node.isRequired,
    pageContext: PropTypes.node.isRequired,
};
