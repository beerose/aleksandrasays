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
  color: string;
  position: "left" | "right";
};
class HamburgerMenu extends React.Component<Props, State> {
  public static defaultProps = {
    position: "right",
  };
  public state: State = {
    disabled: true,
  };

  public componentWillReceiveProps(nextProps: Props) {
    if (nextProps.color !== this.props.color) {
      this.setState({ disabled: true });
    }
  }

  public handleClickOutside = () => {
    this.setState({ ...this.state, disabled: true });
  };

  public handleHamburgerClick = () => {
    this.setState({ ...this.state, disabled: false });
  };
  public render() {
    const { disabled } = this.state;
    const { color, position, visible } = this.props;
    return (
      <>
        {visible && (
          <HamburgerMenuContainer
            onClick={this.handleHamburgerClick}
            style={{
              alignItems: position === "right" ? "flex-end" : "flex-start",
              left: position === "left" ? "15px" : undefined,
              right: position === "right" ? "15px" : undefined,
            }}
          >
            <HamburgerStripe
              color={color}
              linkTo={"about"}
              disabled={disabled}
              text="About me"
            />
            <HamburgerStripe
              color={color}
              external={true}
              linkTo={"https://www.medium.com/@aleksandrasays"}
              disabled={disabled}
              text="Blog"
            />
            <HamburgerStripe
              color={color}
              linkTo={"contact"}
              disabled={disabled}
              text="Contact"
            />
          </HamburgerMenuContainer>
        )}
      </>
    );
  }
}

export default onClickOutside(HamburgerMenu);
