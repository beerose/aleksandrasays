import React from "react";
import onClickOutside from "react-onclickoutside";
import styled from "styled-components";

import { HamburgerStripe } from "./HamburgerStripe";

type State = {
  disabled: boolean;
};

const HamburgerMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30px;
  cursor: pointer;
  z-index: 1;

  transition: all 10s ease-in;
`;

type Props = {
  visible: boolean;
};
class HamburgerMenu extends React.Component<Props, State> {
  public static defaultProps = {
    position: "right",
  };
  public state: State = {
    disabled: true,
  };

  public handleClickOutside = () => {
    this.setState({ ...this.state, disabled: true });
  };

  public handleHamburgerClick = () => {
    this.setState({ ...this.state, disabled: false });
  };
  public render() {
    const { disabled } = this.state;
    return (
      <HamburgerMenuContainer
        onClick={this.handleHamburgerClick}
        style={{
          alignItems: "flex-end",
          right: "15px",
          pointerEvents: disabled ? "initial" : "none",
        }}
      >
        <HamburgerStripe linkTo={"about"} disabled={disabled} text="About me" />
        <HamburgerStripe
          external={true}
          linkTo={"https://www.medium.com/@aleksandrasays"}
          disabled={disabled}
          text="Blog"
        />
        <HamburgerStripe
          linkTo={"contact"}
          disabled={disabled}
          text="Contact"
        />
      </HamburgerMenuContainer>
    );
  }
}

export default onClickOutside(HamburgerMenu);
