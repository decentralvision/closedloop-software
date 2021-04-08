import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PortableText from '@sanity/block-content-to-react';
import styled from 'styled-components';
import serializers from '../serializers';
import { Wrapper, SectionTitle } from '../components';

const query = graphql`
    query DeskQuery {
        desk: sanityDesk {
            title
            _rawContent
        }
    }
`;

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    background-color: var(--primary);

    @media (min-width: 1280px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    header {
        border-bottom: 1px solid var(--gray-300);

        @media (min-width: 1280px) {
            border-right: 1px solid var(--secondary);
            border-bottom: none;
        }

        ul {
            margin-top: var(--space-48);

            li {
                text-transform: uppercase;
            }
        }
    }
`;

export default function Desk() {
    const { desk } = useStaticQuery(query);
    const { title, _rawContent } = desk;

    return (
        <StyledContainer>
            <header>
                <Wrapper>
                    <SectionTitle title={title} />
                </Wrapper>
            </header>
            <Wrapper>
                <PortableText blocks={_rawContent} serializers={serializers} />
            </Wrapper>
        </StyledContainer>
    );
}
