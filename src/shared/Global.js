import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }
    
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    html {
        background-color: #f9f9f959;
    }

    html, body, #root {
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

    :root {
        --gray-1: #f4f4f4;
        --gray-2: #5a5a5a;
        --shadow-1: #edebff;
        --shadow-2: #8080801c;
        --white: #FFF;
        --black: #000;
        --xiketic: #1a090dff;
        --english-violet: #4a314dff;
        --old-lavender: #6b6570ff;
        --laurel-green: #a8ba9aff;
        --granny-smith-apple: #ace894ff;
        --xiketic-transparent: #1a090d08;

        --text-font: 'Nunito', sans-serif;
        --title-font: 'Koulen', cursive; 
        --title-2-font: 'Oswald', sans-serif;
    }
}
`;

export default GlobalStyles;
