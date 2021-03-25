import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled.div`
    p {
        color: var(--gray-100);
        text-transform: uppercase;
        font-weight: 600;
        margin-bottom: var(--space-8);

        @media (min-width: 768px) {
            row-gap: var(--space-0);
            grid-auto-flow: column;
            margin-bottom: var(--space-16);
        }
    }

    h2 {
        font-size: var(--space-32);
        color: var(--gray-50);
        font-weight: 500;

        @media (min-width: 768px) {
            font-size: var(--space-48);
        }
    }
`;

export default function SectionTitle({ title, suptitle }) {
    const newTitle = title.split('\n').map((str) => <h2>{str}</h2>);

    return (
        <StyledTitle>
            <p>{suptitle}</p>
            {newTitle}
        </StyledTitle>
    );
}

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    suptitle: PropTypes.string.isRequired,
};
