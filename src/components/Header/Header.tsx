import React from "react";
import styled from "styled-components";
import { Hamburger } from './Hamburger';
import { Arrow } from './Arrow';

type Props = {
  showArrow: boolean;
};

const HeaderContainer = styled.div`
  height: fit-content;
  width: 94%;
  padding-top: 3%;
`;

export class Header extends React.Component<Props, {}> {
  public static defaultProps = {
    showArrow: true,
  };
  render() {
    const { showArrow } = this.props;
    return (
      <HeaderContainer>
        {showArrow && <Arrow/>}
        <Hamburger/>
      </HeaderContainer>
    );
  }
}
