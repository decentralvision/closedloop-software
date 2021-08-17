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
        color: var(--gray-700);
        text-transform: uppercase;
        font-size: var(--space-32);
        font-weight: 600;

        @media (min-width: 768px) {
            font-size: var(--space-48);
        }
    }
`;

export default function SectionTitle({ title, suptitle, light }) {
    const newTitle = title.split('\n').map((str, index) => {
        if (light) {
            return (
                <h2 key={index} style={{ color: 'var(--gray-100)' }}>
                    {str}
                </h2>
            );
        }
        return <h2 key={index}>{str}</h2>;
    });

    return (
        <StyledTitle>
            {suptitle != null && <p>{suptitle}</p>}
            {newTitle}
        </StyledTitle>
    );
}

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
    suptitle: PropTypes.string,
    light: PropTypes.bool,
};

SectionTitle.defaultProps = {
    suptitle: null,
    light: false,
};
