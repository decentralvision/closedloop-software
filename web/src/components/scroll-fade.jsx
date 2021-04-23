import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

export const introFade = {
    initial: { y: 32, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: 'easeIn',
            type: 'spring',
        },
    },
};

export default function ScrollFade({ children }) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.div variants={introFade}>
            <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                transition={{ duration: 0.5, ease: 'easeIn' }}
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 32 },
                }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}

ScrollFade.propTypes = {
    children: PropTypes.node,
};
