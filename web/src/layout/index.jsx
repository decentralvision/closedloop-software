import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
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
    return (
        <>
            <GlobalStyles />

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
