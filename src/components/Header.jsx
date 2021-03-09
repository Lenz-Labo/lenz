import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from 'styled-components';

const Header = () => {
  let navItems = [
    { name: "TOP" },
    { name: "FEATURE" },
    { name: "WORK" },
    { name: "MEMBER" },
    { name: "FAQ" },
    { name: "CONTACT" },
  ];
  return (
    <HeaderWrapper>
      <nav className={{}}>
        <ul>
          {navItems.map((item) => {
            return (
              <li>
                <AnchorLink href={`#${item.name.toLowerCase()}`} offset="50">
                  {item.name}
                </AnchorLink>
              </li>
            );
          })}
        </ul>
      </nav>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </HeaderWrapper>
  );
}
export default Header;

const HeaderWrapper = styled.div`

`
