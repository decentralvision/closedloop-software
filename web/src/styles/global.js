import { createGlobalStyle } from 'styled-components';

import './reset.css';
import './color.css';
import './space.css';

const GlobalStyles = createGlobalStyle`
    * {
        scrollbar-width: thin;
        scrollbar-color: var(--gray-500);
    }

    *::-webkit-scrollbar {
        width: 12px;
    }

    *::-webkit-scrollbar-track {
        background: var(--white);
    }

    *::-webkit-scrollbar-thumb {
        background-color: var(--gray-700);
    }

    ::selection {
        background: var(--gray-900);
        color: var(--gray-100);
    }

    body {
        font-size: var(--space-16);
        font-family: 'Roboto', sans-serif;
        color: var(--gray-700);
        line-height: 1.5;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Roboto Condensed', sans-serif;
        line-height: 1.1;
    }
`;

export default GlobalStyles;
