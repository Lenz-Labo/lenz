import React, { useState } from "react";

import { ResetStyle } from "./styles/reset";
import styled from "styled-components";
import { Header, Footer, KeyVisual, Logo } from "./components";
import { Main } from "./components/contents";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ResetStyle />
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <Wrapper>
        <div className={isOpen ? "blur" : ""}>
          <KeyVisual />
          <Main />
          <Footer />
        </div>
      </Wrapper>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  & > div {
    transition: 0.5s linear;
    backface-visibility: hidden;
  }
  .blur {
    filter: blur(4px);
    height: 100vh;
  }
`;

const LogoWrapper = styled.div`
  position: fixed;
  left: 0;
  width: 100%;
  top: 0;
  z-index: 200;
  width: 100%;
  height: 100vh;
  content: "";
  position: fixed;
  background: #161617;
  opacity: 1;
  animation: show 5s forwards;

  @keyframes show {
    70% {
      opacity: 1;
    }
    90% {
      z-index: 200;
      opacity: 0;
      transform: scale(1, 1);
    }
    100% {
      opacity: 0;
      z-index: 0;
      transform: scale(0, 0);
    }
  }

  svg {
    z-index: 200;

    .line-sm {
      transform: rotate(180deg);
      transform-origin: 50% 50%;
      animation: line-sm 2s forwards;
    }
    .line-lg {
      transform-origin: 50% 50%;
      animation: line-lg 2s forwards;
    }

    .letter-l {
      opacity: 0;
      animation: move 1s 2s forwards;
    }
    .letter-e {
      opacity: 0;
      animation: move 1s 2.4s forwards;
    }
    .letter-n {
      opacity: 0;
      animation: move 1s 2.8s forwards;
    }
    .letter-z {
      opacity: 0;
      animation: move 1s 3.2s forwards;
    }
  }

  @keyframes move {
    0% {
      opacity: 0;
      transform: translateX(50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes line-sm {
    0% {
      fill: transparent;
    }
    60% {
      transform: rotate(20deg);
      fill: #fff;
    }
    70% {
      transform: rotate(80deg);
      fill: #fff;
    }
    100% {
      transform: rotate(0deg);
      fill: #fff;
    }
  }

  @keyframes line-lg {
    0% {
      fill: transparent;
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
      fill: #fff;
    }
  }
`;
