import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
        width: var(--space-32);
    }
`;

const query = graphql`
    query LogoQuery {
        metadata: sanityMetadata {
            title
            logo {
                asset {
                    fluid(maxWidth: 32) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
        }
    }
`;

const Logo = () => {
    const { metadata } = useStaticQuery(query);

    return (
        <Link to="/">
            <StyledLogo>
                <Img className="logo" fluid={metadata.logo.asset.fluid} alt={metadata.title} />
            </StyledLogo>
        </Link>
    );
};

export default Logo;
