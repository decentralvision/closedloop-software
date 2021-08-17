import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
    query SEOQuery {
        metadata: sanityMetadata(_id: { regex: "/(drafts.|)metadata/" }) {
            title
            description
            twitter
        }
    }
`;

export default function SEO({ title, description, type, lang }) {
    const { metadata } = useStaticQuery(query);

    return (
        <Helmet
            title={title}
            htmlAttributes={{ lang }}
            titleTemplate={title === metadata.title ? '%s' : `${metadata.title} | %s`}
            defer={false}
        >
            <meta name="description" content={metadata.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="utf-8" />
            <meta property="og:title" content={title} key="ogtitle" />
            <meta
                property="og:description"
                content={description || metadata.description}
                key="ogdesc"
            />
            <meta property="og:type" content={type || 'website'} key="ogtype" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description || metadata.description} />
            <meta name="twitter:creator" content={metadata.twitter} />
        </Helmet>
    );
}

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    lang: PropTypes.string,
};

SEO.defaultProps = {
    title: null,
    description: null,
    type: null,
    image: null,
    lang: 'en',
};
