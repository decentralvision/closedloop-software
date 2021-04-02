import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { SEO, Intro } from '../components';
import { Platforms, Solutions, Video, Carousel } from '../sections';

const content = (isFirstMount) => ({
    animate: {
        transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2 : 0 },
    },
});

const container = {
    initial: { y: -20, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};

export default function IndexPage({ location }) {
    const isFirstMount = !location.action;

    return (
        <>
            <SEO title="Home" />
            <motion.section key={location.key} exit={{ opacity: 0 }}>
                {isFirstMount && <Intro />}
                <motion.div variants={content(isFirstMount)} animate="animate" initial="initial">
                    <motion.div variants={container}>
                        <Video />
                        <Solutions />
                        <Platforms />
                        <Carousel />
                    </motion.div>
                </motion.div>
            </motion.section>
        </>
    );
}

IndexPage.propTypes = {
    location: PropTypes.object.isRequired,
};
