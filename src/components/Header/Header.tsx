import React from "react";
import styled from "styled-components";
import { Arrow } from "./Arrow";
import { Hamburger } from "./Hamburger";

type Props = {
  showArrow: boolean;
};

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  height: fit-content;
  width: 94%;
  padding-top: 3%;
`;

export class Header extends React.Component<Props, {}> {
  public static defaultProps = {
    showArrow: true,
  };
  public render() {
    const { showArrow } = this.props;
    return (
      <HeaderContainer>
        {showArrow && <Arrow />}
        <Hamburger />
      </HeaderContainer>
    );
  }
}
