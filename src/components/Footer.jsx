import React from "react";
import styled from 'styled-components';

const Footer = () => {
    return (
    <>
    <footer>
        <Copyright>
          <small>(C) Lenz.</small>
        </Copyright>
      </footer>
    </>
  );
}
export default Footer;

const Copyright = styled.div`
    background: #161617;
    color: #fff;
    position: relative;
    margin-bottom: 13px;
    padding: 20px 0;
    text-align: center;
    font-size: 1.2rem;
    letter-spacing: .2em;

    @media screen and (min-width: 768px) {
      padding: 50px 0;
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
`
