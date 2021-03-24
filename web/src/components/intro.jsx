import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledTransition = styled.div`
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;
    height: 100%;
    width: 100%;

    & > div {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 50;
        background-color: var(--gray-900);
    }

    svg {
        position: absolute;
        display: flex;
        align-self: center;

        pattern {
            color: var(--gray-100);

            .text {
                color: var(--gray-500);
            }
        }

        rect {
            width: 100%;
            height: 100%;
            fill: currentColor;
        }

        text {
            font-weight: 900;
            font-size: var(--space-48);
            text-transform: uppercase;
        }
    }
`;

const box = {
    initial: {
        height: '100vh',
        bottom: 0,
    },
    animate: {
        height: 0,
        transition: {
            when: 'afterChildren',
            duration: 1,
            ease: 'easeOut',
        },
    },
};

const container = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 0,
        transition: {
            duration: 0.25,
            when: 'afterChildren',
        },
    },
};

const text = {
    initial: {
        y: 40,
    },
    animate: {
        y: 80,
        transition: {
            duration: 1,
            ease: 'easeOut',
        },
    },
    exit: {
        opacity: 0,
    },
};

export default function Intro() {
    return (
        <StyledTransition>
            <motion.div initial="initial" animate="animate" variants={box}>
                <motion.svg variants={container}>
                    <pattern id="pattern" patternUnits="userSpaceOnUse" width={512} height={512}>
                        <rect />
                        <motion.rect className="text" variants={text} />
                    </pattern>
                    <text textAnchor="middle" x="50%" y="50%" style={{ fill: 'url(#pattern)' }}>
                        individ
                    </text>
                </motion.svg>
            </motion.div>
        </StyledTransition>
    );
}
