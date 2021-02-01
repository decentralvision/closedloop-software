import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import GlobalStyles from '../styles/global';
import { Footer, Nav } from '../sections';

function Layout({ children }) {
    return (
        <>
            <GlobalStyles />

            <Nav />

            <AnimatePresence exitBeforeEnter>
                <main>{children}</main>
            </AnimatePresence>

            <Footer />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.object.isRequired,
};

export default Layout;
