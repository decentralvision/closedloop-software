import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import GlobalStyles from '../styles/global';
import { Footer, Nav } from '../sections';

function Layout({ children }) {
    return (
        <>
            <GlobalStyles />

            <AnimatePresence exitBeforeEnter>
                <Nav />
                <main>{children}</main>
                <Footer />
            </AnimatePresence>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.object.isRequired,
};

export default Layout;
