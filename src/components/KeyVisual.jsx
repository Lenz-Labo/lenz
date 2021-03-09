import React from "react";
import styled from "styled-components";

import Logo from "../components/Logo";


const KeyVisual = () => {
  return (
    <Visual>
      <picture>
        <source srcset="/img/keyvisual.jpg" media="(max-width: 798px)" />
        <img src="/img/keyvisual-pc.jpg" alt="" height="" width="" />
      </picture>
      <Logo />
    </Visual>
  );
};
export default KeyVisual;


const Visual = styled.div`
  height: 100vh;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

