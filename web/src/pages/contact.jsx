import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { SEO, Intro } from '../components';

const StyledForm = styled.form`
    textarea,
    input {
        width: 100%;
        padding: var(--space-12) var(--space-16);
        background: transparent;
        border: 2px solid var(--gray-300);
        color: var(--gray-700);
    }

    label {
        margin: var(--space-16) var(--space-0);

        span {
            color: var(--gray-900);
        }
    }
`;

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

export default function ContactPage({ location }) {
    const isFirstMount = !location.action;

    return (
        <>
            <SEO title="Contact" />

            <motion.section exit={{ opacity: 0 }}>
                {isFirstMount && <Intro />}

                <motion.div variants={content(isFirstMount)} animate="animate" initial="initial">
                    <motion.div variants={container}>
                        <StyledForm method="POST" netlify-honeypot="bot-field" data-netlify="true">
                            <input type="hidden" name="bot-field" />
                            <input type="hidden" name="form-name" value="contact" />

                            <label htmlFor="name">
                                <span>Name</span>
                                <input type="text" id="name" name="name" required />
                            </label>

                            <label htmlFor="last_name">
                                <span>Last Name</span>
                                <input type="text" id="last_name" name="last_name" required />
                            </label>

                            <label htmlFor="company">
                                <span>Company</span>
                                <input type="text" id="company" name="company" />
                            </label>

                            <label htmlFor="phone">
                                <span>Phone</span>
                                <input type="phone" id="phone" name="phone" required />
                            </label>

                            <label htmlFor="email">
                                <span>Email</span>
                                <input type="email" id="email" name="email" required />
                            </label>

                            <label htmlFor="question">
                                <span>
                                    Have a question or an exciting new idea? Let&apos;s talk
                                </span>
                                <textarea id="question" name="question" rows="8" />
                            </label>

                            <button type="submit">Submit</button>
                        </StyledForm>
                    </motion.div>
                </motion.div>
            </motion.section>
        </>
    );
}

ContactPage.propTypes = {
    location: PropTypes.object.isRequired,
};
