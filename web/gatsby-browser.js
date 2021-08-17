import React from 'react';
import Layout from './src/layout';

export const wrapPageElement = ({ element, props }) => {
    const { location } = props;
    return <Layout location={location}>{element}</Layout>;
};

export const shouldUpdateScroll = ({ routerProps: { location }, getSavedScrollPosition }) => {
    const TRANSITION_DELAY = 0.3 * 1000 * 2;

    if (location.action === 'PUSH') {
        window.setTimeout(() => window.scrollTo(0, 0), TRANSITION_DELAY);
    } else {
        const savedPosition = getSavedScrollPosition(location) || [0, 0];
        window.setTimeout(() => window.scrollTo(...savedPosition), TRANSITION_DELAY);
    }

    return false;
};
