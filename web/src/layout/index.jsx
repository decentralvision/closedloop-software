import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import GlobalStyles from '../styles/global';
import { Nav, Footer, Aside } from '../sections';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    @media (min-width: 768px) {
        flex-direction: row;
    }

    & > div {
        flex: 1;

        @media (min-width: 768px) {
            margin-left: var(--space-96);
        }
    }
`;

function Layout({ children }) {
    window.VIDEOASK_EMBED_CONFIG = {
        kind: 'widget',
        url: 'https://www.videoask.com/fepjstzt8',
        options: {
            widgetType: 'VideoThumbnailWindowTall',
            text: 'BRIEF IT',
            backgroundColor: '#1CB3FC',
            position: 'bottom-right',
            dismissable: true,
        },
    };
    return (
        <>
            <GlobalStyles />

            <Helmet defer={false}>
                <script src="https://www.videoask.com/embed/embed.js" />
            </Helmet>

            <Container>
                <Aside />
                <div>
                    <Nav />

                    <AnimatePresence exitBeforeEnter>
                        <main>{children}</main>
                    </AnimatePresence>

                    <Footer />
                </div>
            </Container>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.object.isRequired,
};

export default Layout;
