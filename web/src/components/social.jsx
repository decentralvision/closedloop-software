import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const StyledSocial = styled.ul`
    display: none;

    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    li {
        margin-top: var(--space-8);

        :first-child {
            margin-top: var(--space-0);
        }
    }

    .social {
        min-width: var(--space-32);
    }
`;

const query = graphql`
    query SocialQuery {
        metadata: sanityMetadata {
            socials {
                title
                url
                logo {
                    asset {
                        fluid(maxWidth: 32) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    }
`;

export default function Social() {
    const { metadata } = useStaticQuery(query);
    const { socials } = metadata;

    return (
        <StyledSocial>
            <ul>
                {socials.map((item, index) => (
                    <li key={index}>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <Img
                                className="social"
                                fluid={item.logo.asset.fluid}
                                alt={item.title}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </StyledSocial>
    );
}
