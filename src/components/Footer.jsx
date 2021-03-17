import React from "react";

import { Link, animateScroll as scroll } from "react-scroll";
import styled from 'styled-components';

const Footer = () => {
    return (
    <>
    <footer>
      <Anchor>
        <Link
            activeClass="active"
            to="top"
            spy={true}
            smooth={true}
            duration={500}
            aria-label="先頭へ戻る"
          ></Link>
          </Anchor>
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

const Anchor = styled.div`
    position: fixed;
    bottom: -25px;
    right: 20px;
    z-index: 20;

    a {
      transform: rotate(45deg);
      display: block;
      width: 40px;
      height: 40px;
      border-top: 7px double #E20E4F;
      border-left: 7px double #E20E4F;
      transition: .3s;
      &:hover {
        transform: translateY(-20px) rotate(45deg);
      }
    }
`
