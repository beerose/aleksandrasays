import React from "react";
import styled from "styled-components";

type State = {
  isClicked: boolean;
  disabled: boolean;
};

const HamburgerStripe = styled.div`
  width: 60px;
  height: 10px;
  background: #0008CE;
  margin: 2.5px;
  border-radius: 3px
`;

const HamburgerMenuContainer = styled.div`
  position: fixed;
  top: 5%;
  right: 5%;
  display: flex;
  flex-direction: column;
  background: white;
`

export default class HamburgerMenu extends React.Component<{}, State> {
  render() {
    return (
      <HamburgerMenuContainer>
        <HamburgerStripe />
        <HamburgerStripe />
        <HamburgerStripe />
      </HamburgerMenuContainer>
    );
  }
}
