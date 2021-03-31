import React from 'react';
import { graphql } from 'gatsby';
import PortableText from '@sanity/block-content-to-react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { SEO, Intro } from '../components';
import serializers from '../serializers';

export const query = graphql`
    query ContactPageQuery {
        contact: sanityContact {
            title
            _rawDescription
            number
            email
        }
    }
`;

const StyledContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));

    @media (min-width: 1280px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
`;

const StyledWrapper = styled.div`
    padding: var(--space-48) var(--space-24);

    @media (min-width: 768px) {
        padding: var(--space-48);
    }

    @media (min-width: 1024px) {
        padding: var(--space-64);
    }

    @media (min-width: 1280px) {
        padding: var(--space-96);
    }

    @media (min-width: 1536px) {
        padding: var(--space-128);
    }
`;

const StyledInformation = styled.div`
    display: flex;
    flex-direction: column;
    border-right: 1px solid var(--gray-400);

    h1 {
        color: var(--gray-700);
        font-size: var(--space-64);
        text-transform: uppercase;
        font-weight: 600;
    }

    a {
        font-weight: 600;
    }

    .contact {
        display: flex;
        justify-content: space-between;
        border-top: 1px solid var(--gray-400);
        border-bottom: 1px solid var(--gray-400);
        padding: var(--space-48) var(--space-24);

        @media (min-width: 768px) {
            padding: var(--space-48) var(--space-48);
        }

        @media (min-width: 1024px) {
            padding: var(--space-48) var(--space-64);
        }

        @media (min-width: 1280px) {
            padding: var(--space-48) var(--space-96);
        }

        @media (min-width: 1536px) {
            padding: var(--space-48) var(--space-128);
        }
    }
`;

const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    padding: var(--space-48) var(--space-24);

    @media (min-width: 768px) {
        padding: var(--space-48);
    }

    @media (min-width: 1024px) {
        padding: var(--space-64);
    }

    @media (min-width: 1280px) {
        padding: var(--space-96);
    }

    @media (min-width: 1536px) {
        padding: var(--space-128);
    }

    label {
        margin-bottom: var(--space-16);

        input,
        textarea {
            margin-top: var(--space-4);
        }
    }

    h2 {
        color: var(--gray-700);
        text-align: left;
        margin-bottom: var(--space-64);
        font-size: var(--space-40);
        font-weight: 600;
    }

    textarea,
    input {
        width: 100%;
        padding: var(--space-12) var(--space-16);
        background: transparent;
        border: 1px solid var(--gray-500);
        color: var(--gray-700);
    }

    button {
        width: 100%;
        color: var(--gray-50);
        font-weight: 700;
        font-size: var(--space-24);
        text-transform: uppercase;
        background-color: var(--gray-700);
        padding: var(--space-16) var(--space-8);

        :hover {
            background-color: var(--gray-800);
        }
    }
`;

const content = (isFirstMount) => ({
    animate: {
        transition: { staggerChildren: 0.1, delayChildren: isFirstMount ? 2 : 0 },
    },
});

export default function ContactPage(props) {
    const { location, data } = props;
    const { title, number, email, _rawDescription } = data.contact;

    const isFirstMount = !location.action;

    return (
        <>
            <SEO title="Contact" />

            <motion.section key={location.key} exit={{ opacity: 0 }}>
                {isFirstMount && <Intro />}

                <motion.div variants={content(isFirstMount)} animate="animate" initial="initial">
                    <StyledContainer>
                        <StyledInformation>
                            <StyledWrapper>
                                <h1>{title}</h1>
                            </StyledWrapper>
                            <div className="contact">
                                <a href={`tel:${number}`}>{number}</a>
                                <a href={`mailto:${email}`}>{email}</a>
                            </div>
                        </StyledInformation>

                        <StyledForm
                            name="contact"
                            method="POST"
                            netlify-honeypot="bot-field"
                            data-netlify="true"
                        >
                            <input type="hidden" name="bot-field" />
                            <input type="hidden" name="form-name" value="contact" />

                            <PortableText blocks={_rawDescription} serializers={serializers} />

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

                            <button type="submit">Send Request</button>
                        </StyledForm>
                    </StyledContainer>
                </motion.div>
            </motion.section>
        </>
    );
}

ContactPage.propTypes = {
    location: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired,
};
