import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { SEO, Intro } from '../components';
import { Platforms, Solutions, Video, Carousel, Desk, Welcome, Brand } from '../sections';
import { fadeIn } from '../components/animations';

const content = (isFirstMount) => ({
    animate: {
        transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2 : 0 },
    },
});

export default function IndexPage({ location }) {
    const isFirstMount = !location.action;

    return (
        <>
            <SEO title="Home" />
            <motion.section key={location.key} exit={{ opacity: 0 }}>
                {isFirstMount && <Intro />}
                <motion.div variants={content(isFirstMount)} animate="animate" initial="initial">
                    <motion.div variants={fadeIn}>
                        <Welcome />
                        <Brand />
                        <Desk />
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
