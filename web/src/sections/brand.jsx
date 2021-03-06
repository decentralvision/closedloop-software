import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PortableText from '@sanity/block-content-to-react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import serializers from '../serializers';
import { Wrapper, SectionTitle, ScrollFade } from '../components';
import sms from '../images/sms.json';
import mms from '../images/mms.json';
import inApp from '../images/in-app.json';
import social from '../images/social.json';

const query = graphql`
    query BrandQuery {
        brand: sanityBrand {
            title
            scrollId
            _rawContent
            channels {
                title
                _rawContent
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
`;

const StyledBrand = styled.section`
    margin-top: -64px;
    padding-top: var(--space-64);

    header {
        p {
            max-width: 76ch;
            margin-top: var(--space-24);
        }
    }
`;

export default function Brand() {
    const { brand } = useStaticQuery(query);
    const { title, scrollId, _rawContent, channels } = brand;
    const imageArray = [sms, mms, inApp, social];

    return (
        <StyledBrand id={scrollId}>
            <Wrapper>
                <header>
                    <ScrollFade>
                        <SectionTitle title={title} />
                        <PortableText blocks={_rawContent} serializers={serializers} />
                    </ScrollFade>
                </header>
                {channels.map((item, index) => (
                    <StyledGrid key={index}>
                        <ScrollFade>
                            <Lottie
                                style={{ maxWidth: '512px' }}
                                animationData={imageArray[index]}
                            />
                        </ScrollFade>
                        <article>
                            <ScrollFade>
                                <h3>{item.title}</h3>
                                <PortableText blocks={item._rawContent} serializers={serializers} />
                            </ScrollFade>
                        </article>
                    </StyledGrid>
                ))}
            </Wrapper>
        </StyledBrand>
    );
}
