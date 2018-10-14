import React from "react";
import onClickOutside from "react-onclickoutside";
import styled from "styled-components";

import { HamburgerStripe } from "./HamburgerStripe";

type State = {
  open: boolean;
};

type HamburgerMenuContainerProps = { open: boolean };
const HamburgerMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 30px;
  cursor: pointer;
  z-index: 1;
  align-items: flex-end;
  right: 15px;
  pointer-events: ${(props: HamburgerMenuContainerProps) =>
    props.open ? "none" : "initial"};
`;

type Props = {
  visible: boolean;
};
class HamburgerMenu extends React.Component<Props, State> {
  public static defaultProps = {
    position: "right",
  };
  public state: State = {
    open: false,
  };

  public handleClickOutside = () => {
    this.setState({ ...this.state, open: false });
  };

  public handleHamburgerClick = () => {
    this.setState({ ...this.state, open: true });
  };
  public render() {
    const { open } = this.state;
    return (
      <HamburgerMenuContainer onClick={this.handleHamburgerClick} open={open}>
        <HamburgerStripe linkTo={"about"} open={open} text="About me" />
        <HamburgerStripe
          external={true}
          linkTo={"https://www.medium.com/@aleksandrasays"}
          open={open}
          text="Blog"
        />
        <HamburgerStripe linkTo={"contact"} open={open} text="Contact" />
      </HamburgerMenuContainer>
    );
  }
}

export const Hamburger = onClickOutside(HamburgerMenu);
