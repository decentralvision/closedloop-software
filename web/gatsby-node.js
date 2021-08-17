exports.onCreateWebpackConfig = ({ stage, actions }) => {
    if (stage.startsWith('develop')) {
        actions.setWebpackConfig({
            resolve: {
                alias: {
                    'react-dom': '@hot-loader/react-dom',
                },
            },
        });
    }
};

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        {
            allSanityArticle(filter: { slug: { current: { ne: null } } }) {
                edges {
                    node {
                        title
                        slug {
                            current
                        }
                    }
                }
            }
        }
    `);

    const articles = result.data.allSanityArticle.edges || [];

    articles.forEach(({ node }, index) => {
        const path = `/${node.slug.current}`;

        createPage({
            path,
            component: require.resolve('./src/templates/article.jsx'),
            context: {
                slug: node.slug.current,
                prevTitle: index === 0 ? null : articles[index - 1].node.title,
                prev: index === 0 ? null : articles[index - 1].node,
                nextTitle: index === articles.length - 1 ? null : articles[index + 1].node.title,
                next: index === articles.length - 1 ? null : articles[index + 1].node,
            },
        });
    });
};
