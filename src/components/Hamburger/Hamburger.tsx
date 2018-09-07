import React from 'react';
import styled from 'styled-components';

import { HamburgerStripe } from './HamburgerStripe';

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
  align-items: flex-end;
`

export default class HamburgerMenu extends React.Component<{}, State> {
  state: State = {
    isClicked: false,
    disabled: true,
  };
  render() {
    const handleHamburgerClick = () => {
      this.setState({ ...this.state, disabled: false });
    }
    return (
      <HamburgerMenuContainer
        onClick={handleHamburgerClick}
      >
        <HamburgerStripe linkTo={'about'} disabled={this.state.disabled} text='About me'/>
        <HamburgerStripe target={'_blank'} linkTo={'https://www.medium.com/@aleksandrasays'} disabled={this.state.disabled} text='Blog'/>
        <HamburgerStripe linkTo={'contact'} disabled={this.state.disabled} text='Contact'/>
      </HamburgerMenuContainer>
    );
  }
}
