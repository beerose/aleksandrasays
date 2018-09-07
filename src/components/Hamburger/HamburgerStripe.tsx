import React from "react";
import styled from "styled-components";
import { style as tss } from 'typestyle';


type Props = {
  text: string,
  onClick?: () => void;
  disabled: boolean;
};

type State = {
  disabled: boolean;
};

const StyledHamburgerStripe = styled.div`
  background: #0008CE;
  margin: 3.5px;
  color: white;
  border-radius: 2px;
`;

const styles = {
  rolled: tss({
    width: 60,
    height: 10,
    alignItems: 'center',
  }),
  unrolled: tss({
    textAlign: 'center',
    height: 30,
    width: 'fit-content',
    padding: '10px 10px 0px 10px',
    textAlignLast: 'right',
  }),
}

export class HamburgerStripe extends React.Component<Props, State> {
  state: State = {
    disabled: true,
  };

  componentWillReceiveProps(nextProps: Props) {
    this.setState({ disabled: nextProps.disabled });
  }

  render() {
    const { disabled } = this.state;
    return (
      <StyledHamburgerStripe className={disabled ? styles.rolled : styles.unrolled}>
        {!disabled && this.props.text}
      </StyledHamburgerStripe>
    );
  }
}
