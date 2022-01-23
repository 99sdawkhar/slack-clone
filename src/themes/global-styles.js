// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
  }

  a {
    text-decoration: none;
    display: inline-block;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  ul, li {
    list-style-type: none;
  }

	a {
		text-decoration: none;
		color: inherit;
		&:hover {
			color: inherit; 
		}
	}

  @media screen and (min-width: 540px) {
    body { overflow: hidden; }
  }

  .container {
    display: flex;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #797c7e;
    border-radius: 10px;
  }
`;

export default GlobalStyle;
