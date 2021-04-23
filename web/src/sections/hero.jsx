import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import PortableText from '@sanity/block-content-to-react';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';
import serializers from '../serializers';
import { Wrapper, ScrollFade } from '../components';

const query = graphql`
    query HeroQuery {
        hero: sanityHero {
            _rawTitle
            _rawContent
            image {
                asset {
                    fluid(maxWidth: 1920) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
        }
        welcome: sanityWelcome {
            title
            _rawDescription
            _rawContent
        }
    }
`;

const StyledWelcome = styled.div`
    header {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-end;
        text-align: right;

        h2 {
            font-size: var(--space-48);
            font-weight: 600;
        }
        p {
            max-width: 64ch;
            margin-top: var(--space-24);
        }
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        text-align: left;
        margin-top: var(--space-64);

        p {
            font-size: var(--space-24);
            font-weight: 600;
        }
    }
`;

const StyledHero = styled.section`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));

    @media (min-width: 1280px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    header {
        grid-column: span 2 / span 2;
        border-right: 1px solid var(--secondary);

        h1 {
            color: var(--gray-700);
            text-transform: uppercase;
            font-size: var(--space-48);
            font-weight: 900;

            @media (min-width: 768px) {
                font-size: var(--space-64);
            }

            @media (min-width: 1024px) {
                font-size: var(--space-80);
            }

            span {
                color: var(--secondary);
            }
        }
    }
`;

const StyledInformation = styled.div`
    display: flex;
    flex-direction: column;

    .space {
        height: 0%;

        @media (min-width: 768px) {
            height: 100%;
        }
    }

    .cta {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        color: var(--gray-700);
        font-weight: 600;
        padding: var(--space-24);
        border-top: 1px solid var(--secondary);

        @media (min-width: 768px) {
            padding: var(--space-48);
        }

        @media (min-width: 1024px) {
            padding: var(--space-64);
        }

        button {
            margin-top: var(--space-32);
            text-transform: uppercase;
            color: var(--secondary);
            font-size: var(--space-14);
        }
    }
`;

export default function Welcome() {
    const { welcome, hero } = useStaticQuery(query);

    return (
        <>
            <StyledHero>
                <header>
                    <Wrapper>
                        <ScrollFade>
                            <PortableText blocks={hero._rawTitle} serializers={serializers} />
                        </ScrollFade>
                    </Wrapper>
                </header>

                <StyledInformation>
                    <div className="space" />
                    <div className="cta">
                        <ScrollFade>
                            <PortableText blocks={hero._rawContent} serializers={serializers} />
                            <button type="button" onClick={() => scrollTo('#welcome')}>
                                Read More
                            </button>
                        </ScrollFade>
                    </div>
                </StyledInformation>
            </StyledHero>

            <Img fluid={hero.image.asset.fluid} alt={hero.title} />

            <StyledWelcome id="welcome">
                <Wrapper>
                    <ScrollFade>
                        <header>
                            <h2>{welcome.title}</h2>
                            <PortableText
                                blocks={welcome._rawDescription}
                                serializers={serializers}
                            />
                        </header>
                        <section>
                            <PortableText blocks={welcome._rawContent} serializers={serializers} />
                        </section>{' '}
                    </ScrollFade>
                </Wrapper>
            </StyledWelcome>
        </>
    );
}
