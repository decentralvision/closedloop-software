import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { SEO, Intro } from '../components';
import { Platforms, Solutions, Carousel, Desk, Hero, Brand } from '../sections';
import { fadeIn, swipe } from '../components/animations';

const content = (isFirstMount) => ({
    animate: {
        transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2 : 0 },
    },
});

const StyledBackground = styled.div`
    background-color: var(--primary);
    position: relative;
    z-index: 20;

    .background {
        position: absolute;
        position: fixed;
        top: 0;
        right: 0;
        left: -50%;
        left: 0;
        bottom: 0;
        height: 150%;
        background: #fff;
        transform: skewY(-75deg);
        height: 75%;
        transform: skewY(-70deg);
    }

    .content {
        position: relative;
    }
`;

export default function IndexPage({ location }) {
    const isFirstMount = !location.action;

    return (
        <>
            <SEO title="Home" />
            <motion.section key={location.key} exit={{ opacity: 0 }}>
                {isFirstMount && <Intro />}
                <motion.div variants={content(isFirstMount)} animate="animate" initial="initial">
                    <StyledBackground>
                        <motion.div className="background" variants={swipe} />
                        <div className="content">
                            <Hero />
                        </div>
                    </StyledBackground>
                    <motion.div variants={fadeIn} style={{ position: 'relative', zIndex: '20' }}>
                        <Brand />
                        <Desk />
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
