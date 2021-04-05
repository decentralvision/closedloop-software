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
        background: var(--gray-100);
    }

    *::-webkit-scrollbar-thumb {
        background-color: var(--gray-900);
    }

    ::selection {
        background: var(--gray-900);
        color: var(--gray-100);
    }
`;

export default GlobalStyles;
