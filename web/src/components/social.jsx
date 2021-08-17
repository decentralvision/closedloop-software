import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';

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
        opacity: 0.8;

        :hover {
            opacity: 1;
        }
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
                        gatsbyImageData(
                            width: 32
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
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
                            <GatsbyImage
                                className="social"
                                image={item.logo.asset.gatsbyImageData}
                                alt={item.title}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </StyledSocial>
    );
}
