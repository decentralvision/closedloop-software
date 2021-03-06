import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCard = styled.div`
    min-height: var(--space-176);

    @media (min-width: 768px) {
        min-height: var(--space-320);
    }

    img {
        filter: grayscale(1);

        :hover {
            transition: all 0.4s ease-in-out;
            filter: grayscale(0);
        }
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

export default function ArticleCard({ slug, title, excerpt, banner }) {
    const image = getImage(banner);

    return (
        <Link to={`/${slug.current}/`}>
            <StyledCard>
                <GatsbyImage image={image} alt={title} />

                <article>
                    <h3>{title}</h3>
                    <p>{excerpt}</p>
                </article>
            </StyledCard>
        </Link>
    );
}

ArticleCard.propTypes = {
    title: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    banner: PropTypes.object.isRequired,
    slug: PropTypes.object.isRequired,
};
