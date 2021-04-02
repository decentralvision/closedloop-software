import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const StyledVideo = styled.video`
    width: 100%;
`;

const query = graphql`
    query VideoQuery {
        video: sanityVideo {
            title
            clip {
                asset {
                    _id
                    url
                }
            }
            poster {
                asset {
                    _id
                    url
                }
            }
        }
    }
`;

const Video = () => {
    const { video } = useStaticQuery(query);
    const { title, poster, clip } = video;

    return (
        <StyledVideo title={title} controls preload="none" poster={poster.asset.url}>
            <source src={clip.asset.url} type="video/mp4" />
        </StyledVideo>
    );
};

export default Video;
