import React from "react";

import { Link, animateScroll as scroll } from "react-scroll";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Header = props => {
  let navItems = [
    { name: "TOP" },
    { name: "FEATURE" },
    { name: "ACTIVITY" },
    { name: "WORKS" },
    { name: "MEMBERS" },
    { name: "FAQ" },
    { name: "CONTACT" },
  ];

  //メニュー
  const move = e =>{
    document.body.classList.toggle('no-scroll')
    props.setIsOpen(!props.isOpen)
  }

  return (
    <HeaderWrapper>
      <nav className={(props.isOpen?'open':'')}>
        <ul>
          {navItems.map((item) => {
            return (
              <li>
              <Link
                  activeClass="active"
                  to={item.name.toLowerCase()}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={move}
              >{item.name}
              </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <ul className="p-fixed_nav">
        <li class="c-nav-btn"><span>{props.isOpen ? `CLOSE` : `MENU`}</span><button onClick={move} className={(props.isOpen ? 'open' : '')}></button></li>
        <li><FontAwesomeIcon icon={faHeart} /></li>
        <li><Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
          <FontAwesomeIcon icon={faEnvelope} />
        </Link></li>
      </ul>
    </HeaderWrapper>
  );
}
export default Header;

const HeaderWrapper = styled.div`

nav {
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 100;
  justify-content: center;

  ul {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    overflow: auto;
    padding: 50px;
  }
  li {
    margin-top: 10px;
    margin-bottom: 10px;
    @media screen and (min-width: 768px) {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
  a {
    text-decoration: none;
    color: #202443;
    font-size: 20px;
    position: relative;
    letter-spacing: 0.1em;
    padding-bottom: 10px;
    overflow: hidden;
    display: inline-block;

    @media screen and (min-width: 768px) {
      font-size: 30px;
    }

    &:hover {
      &::after {
        transform: translateX(0%);
      }
    }

    &::after {
      backface-visibility:hidden;
      transition: .3s;
      content: '';
      position: absolute;
      height: 2px;
      width: 100%;
      display: block;
      left: 0;
      bottom: 0;
      background: linear-gradient(to right, #202443 80%,#E20E4F 80%,#E20E4F 100%);
      transform: translateX(-100%);
    }
  }

  &.open {
    display: flex;

    &::before {
      z-index: -1;
      display: block;
      background: rgba(255, 255, 255, .2);
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
}

//ナビゲーション
.p-fixed_nav {
  position: fixed;
  left: 0;
  z-index: 100;
  margin-top: 10px;

    li {
      margin-bottom: 20px;
      @media screen and (min-width: 768px) {
        margin-bottom: 40px;

      }
    }

    .c-nav-btn {
      margin-left: 20px;
      color: #E20E4F;
      font-family: 'Roboto Mono', monospace;
      font-size: 1rem;
      letter-spacing: .1em;
      padding: 0;
      writing-mode: vertical-rl;

      span {
        display: block;
        position: absolute;
        left: 15px;
        transform: rotate(180deg);
      }

      button {
        display: block;
        width: 20px;
        background: none;
        border: none;
        height: 40px;
        position: relative;
        outline: none;


        &.open {
          &::before {
            height: 100%;
            transform: rotate(-35deg) translate(7px,3px);
          }
          &::after {
            height: 100%;
            transform: rotate(35deg) translate(-5px, 1px);
          }
        }

        &::after {
          backface-visibility:hidden;
          transition: .3s;
          position: absolute;
          content: '';
          background: #E20E4F;
          height: 80%;
          width: 2px;
          display: block;
          left: 20px;
          top: 0;
        }
        &::before {
          backface-visibility:hidden;
          transition: .3s;
          position: absolute;
          left: 10px;
          top: 0;
          content: '';
          background: #E20E4F;
          height: 120%;
          width: 2px;
          display: block;
        }
      }
    }

    i, svg {
      margin-left: 20px;
      width: 30px;
      height: 30px;
      color: #E20E4F;
    }
  }
`
