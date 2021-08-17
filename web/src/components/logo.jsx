import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const query = graphql`
    query LogoQuery {
        metadata: sanityMetadata {
            title
            logo {
                asset {
                    gatsbyImageData(width: 32, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
            }
        }
    }
`;

const Logo = () => {
    const { metadata } = useStaticQuery(query);
    const image = getImage(metadata.logo.asset.gatsbyImageData);

    return (
        <Link to="/">
            <StyledLogo>
                <GatsbyImage image={image} alt={metadata.title} />
            </StyledLogo>
        </Link>
    );
};

export default Logo;
