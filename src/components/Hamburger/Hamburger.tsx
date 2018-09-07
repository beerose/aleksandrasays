import React from "react";
import styled from "styled-components";

import { HamburgerStripe } from "./HamburgerStripe";

type State = {
  isClicked: boolean;
  disabled: boolean;
};

const HamburgerMenuContainer = styled.div`
  position: fixed;
  top: 5%;
  right: 5%;
  display: flex;
  flex-direction: column;
  // background: white;
  align-items: flex-end;
`

export default class HamburgerMenu extends React.Component<{}, State> {
  state: State = {
    isClicked: false,
    disabled: true,
  };
  render() {
    const handleHamburgerClick = () => {
      this.setState({ ...this.state, disabled: !this.state.disabled });
    }
    return (
      <HamburgerMenuContainer
        onClick={handleHamburgerClick}
      >
        <HamburgerStripe disabled={this.state.disabled} text="About me"/>
        <HamburgerStripe disabled={this.state.disabled} text="Blog"/>
        <HamburgerStripe disabled={this.state.disabled} text="Contact"/>
      </HamburgerMenuContainer>
    );
  }
}
