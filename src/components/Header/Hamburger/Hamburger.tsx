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
  align-items: flex-end;
  position: absolute;
  top: 30px;
  right: 25px;
  cursor: pointer;
`;

type Props = {
  visible: boolean;
};
class HamburgerMenu extends React.Component<Props, State> {
  public state: State = {
    disabled: true,
  };

  public handleClickOutside = () => {
    this.setState({ ...this.state, disabled: true });
  };

  public render() {
    const handleHamburgerClick = () => {
      this.setState({ ...this.state, disabled: false });
    };
    return (
      <>
        {this.props.visible && (
          <HamburgerMenuContainer onClick={handleHamburgerClick}>
            <HamburgerStripe
              linkTo={"about"}
              disabled={this.state.disabled}
              text="About me"
            />
            <HamburgerStripe
              external={true}
              linkTo={"https://www.medium.com/@aleksandrasays"}
              disabled={this.state.disabled}
              text="Blog"
            />
            <HamburgerStripe
              linkTo={"contact"}
              disabled={this.state.disabled}
              text="Contact"
            />
          </HamburgerMenuContainer>
        )}
      </>
    );
  }
}

export default onClickOutside(HamburgerMenu);
