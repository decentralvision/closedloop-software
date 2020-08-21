import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyles from '../styles/global';

import Footer from '../sections/footer';

function Layout({ children }) {
    return (
        <>
            <GlobalStyles />
            <main>{children}</main>
            <Footer />
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
