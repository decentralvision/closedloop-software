import { createGlobalStyle } from 'styled-components';

import './reset.css';
import './color.css';
import './space.css';

const GlobalStyles = createGlobalStyle`
    :root {
        --black: #000000;
        --white: #ffffff;
    }
`;

export default GlobalStyles;
