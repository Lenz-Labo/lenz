import { createGlobalStyle } from "styled-components";

export const ResetStyle = createGlobalStyle`
  /*
    html5doctor.com Reset Stylesheet
    v1.6.1
    Last Updated: 2010-09-17
    Author: Richard Clark - http://richclarkdesign.com
    Twitter: @rich_clark
  */
  html, body, div, span, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  abbr, address, cite, code,
  del, dfn, em, img, ins, kbd, q, samp,
  small, strong, sub, sup, var,
  b, i,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
    box-sizing: border-box;
  }
  body {
    line-height: 1;
  }
  article,aside,details,figcaption,figure,
  footer,header,hgroup,menu,nav,section {
    display: block;
  }
  ul {
    list-style: none;
  }
  blockquote, q {
    quotes:none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content:'';
    content:none;
  }
  a {
    margin:0;
    padding:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
  }
  /* change colours to suit your needs */
  ins {
      background-color:#ff9;
      color:#000;
      text-decoration:none;
  }
  /* change colours to suit your needs */
  mark {
    background-color:#ff9;
    color:#000;
    font-style:italic;
    font-weight:bold;
  }
  del {
    text-decoration: line-through;
  }
  abbr[title], dfn[title] {
    border-bottom:1px dotted;
    cursor:help;
  }
  table {
    border-collapse:collapse;
    border-spacing:0;
  }
  /* change border colour to suit your needs */
  hr {
    display:block;
    height:1px;
    border:0;
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
  }
  input, select {
    vertical-align:middle;
  }

  html {
    font-family: 'Roboto Mono', monospace, "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "メイリオ", sans-serif;
    font-weight: 500;
    color: #161617;
    font-size: 62.5%;
  }

  body {
    font-size: 1.4rem;

    @media screen and (min-width: 768px) {
      font-size: 1.6rem;
    }

    &.no-scroll {
      overflow: hidden;
    }
  }
  img {
      max-width: 100%;
      height: auto;
      vertical-align: bottom;
  }

  .container {
    max-width: 1020px;
    margin:0 auto;
    padding-left: 30px;
    padding-right: 30px;

    &.sm {
      max-width: 800px;
    }

    @media screen and (min-width: 768px) {
      padding-left: 50px;
      padding-right: 50px;
    }
  }

  .black {
    background: #161617;
    color: #fff;
    position: relative;
    margin-bottom: 50px;

    .main-title {
      color: #fff;
    }

    &::before {
      content: '';
      width: 100%;
      display: block;
      bottom: -7px;
      position: absolute;
      border-bottom: 5px solid #161617;
    }
    &::after {
      content: '';
      width: 100%;
      display: block;
      bottom: -11px;
      position: absolute;
      border-bottom: 2px solid #161617;
    }
  }
  .main-title {
    font-size: 3rem;
    text-align: center;
    padding: 30px;
    color: #303134;
    letter-spacing: 0.125em;

    &.pt-lg {
      padding-top: 50px;
    }

    @media screen and (min-width: 768px) {
      padding: 50px 70px;
      font-size: 4.6rem;

      &.pt-lg {
        padding-top: 80px;
      }
    }
  }
  .center {
    text-align: center;
  }
`;
