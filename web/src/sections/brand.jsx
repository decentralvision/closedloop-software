import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PortableText from '@sanity/block-content-to-react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import serializers from '../serializers';
import { Wrapper, SectionTitle } from '../components';

const query = graphql`
    query BrandQuery {
        brand: sanityBrand {
            title
            _rawContent
            channels {
                title
                _rawContent
                image {
                    asset {
                        fluid(maxWidth: 512) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    }
`;

const StyledGrid = styled.div`
    display: grid;
    gap: var(--space-48);
    margin-top: var(--space-96);
    grid-template-columns: repeat(1, minmax(0, 1fr));

    @media (min-width: 1280px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    :nth-child(2n) {
        direction: rtl;

        article {
            text-align: left;
        }
    }

    article {
        display: flex;
        flex-direction: column;
        justify-content: center;

        h3 {
            font-size: var(--space-32);
            font-weight: 600;
        }

        p {
            margin-top: var(--space-24);
        }
    }

    & > div {
        width: 60%;
    }
`;

const StyledHeader = styled.header`
    p {
        max-width: 76ch;
        margin-top: var(--space-24);
    }
`;

export default function Brand() {
    const { brand } = useStaticQuery(query);
    const { title, _rawContent, channels } = brand;

    return (
        <Wrapper>
            <StyledHeader>
                <SectionTitle title={title} />
                <PortableText blocks={_rawContent} serializers={serializers} />
            </StyledHeader>
            {channels.map((item, index) => (
                <StyledGrid key={index}>
                    <div>
                        <Img fluid={item.image.asset.fluid} alt={title} />
                    </div>
                    <article>
                        <h3>{item.title}</h3>
                        <PortableText blocks={item._rawContent} serializers={serializers} />
                    </article>
                </StyledGrid>
            ))}
        </Wrapper>
    );
}
