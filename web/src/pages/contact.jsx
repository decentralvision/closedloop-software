import React from 'react';
import styled from 'styled-components';
import { SEO } from '../components';
import { Layout, Wrapper } from '../containers';

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

export default function ContactPage() {
    return (
        <Layout>
            <SEO title="Contact" />
            <Wrapper>
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
                        <span>Have a question or an exciting new idea? Let&apos;s talk</span>
                        <textarea id="question" name="question" rows="8" />
                    </label>

                    <button type="submit">Submit</button>
                </StyledForm>
            </Wrapper>
        </Layout>
    );
}
