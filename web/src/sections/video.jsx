import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import YouTube from 'react-youtube';
import styled from 'styled-components';

const query = graphql`
    query VideoQuery {
        video: sanityVideo {
            videoId
        }
    }
`;

const StyledVideo = styled.section`
    .youtube {
        position: relative;
        width: 100%;
        padding-bottom: 56.25%;

        iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 0;
        }
    }
`;

const Video = () => {
    const { video } = useStaticQuery(query);
    const { videoId } = video;

    return (
        <StyledVideo>
            <YouTube videoId={videoId} containerClassName="youtube" />
        </StyledVideo>
    );
};

export default Video;
