import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import MapEdgesToNodes from '../lib/map-edges-to-nodes';
import Layout from '../components/layout';
import SEO from '../components/seo';

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
        <Link to={`/${slug.current}`}>
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
    const { data } = props;
    const articles = data && data.article && MapEdgesToNodes(data.article);

    return (
        <Layout>
            <SEO title="Articles" />
            <section>
                {articles.map((item) => (
                    <ArticleCard
                        key={item.id}
                        slug={item.slug}
                        title={item.title}
                        excerpt={item.excerpt}
                        image={item.image}
                    />
                ))}
            </section>
        </Layout>
    );
};

export default ArticlePage;

ArticlePage.propTypes = {
    data: PropTypes.node.isRequired,
};

ArticleCard.propTypes = {
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
};
