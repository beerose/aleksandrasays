import React from 'react';
import styled from 'styled-components';
import onClickOutside from "react-onclickoutside";

import { HamburgerStripe } from './HamburgerStripe';

type State = {
  disabled: boolean;
};

const HamburgerMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`

class HamburgerMenu extends React.Component<{}, State> {
  state: State = {
    disabled: true,
  };

  handleClickOutside = () => {
    this.setState({ ...this.state, disabled: true });
  };

  render() {
    const handleHamburgerClick = () => {
      this.setState({ ...this.state, disabled: false });
    }
    return (
      <HamburgerMenuContainer onClick={handleHamburgerClick}>
        <HamburgerStripe linkTo={'about'} disabled={this.state.disabled} text='About me'/>
        <HamburgerStripe external={true} linkTo={'https://www.medium.com/@aleksandrasays'} disabled={this.state.disabled} text='Blog'/>
        <HamburgerStripe linkTo={'contact'} disabled={this.state.disabled} text='Contact'/>
      </HamburgerMenuContainer>
    );
  }
}

export default onClickOutside(HamburgerMenu);
