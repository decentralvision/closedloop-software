import React from 'react';
import styled from 'styled-components';
import { Divider } from '../components';
import { Wrapper } from '../containers';

const StyledFooter = styled.footer`
    background-color: var(--gray-700);
`;

const StyledNotice = styled.div`
    border-top: 1px solid var(--gray-800);
    padding: var(--space-16) var(--space-0);

    p {
        color: var(--gray-200);
        font-size: var(--space-16);
    }
`;

export default function Footer() {
    return (
        <StyledFooter>
            <Divider />
            <Wrapper>
                <StyledNotice>
                    <p>© Copyright Individ {new Date().getFullYear()}. All rights reserved.</p>
                </StyledNotice>
            </Wrapper>
        </StyledFooter>
    );
}
