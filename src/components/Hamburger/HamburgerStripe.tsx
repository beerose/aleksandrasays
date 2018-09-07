import React from "react";
import styled from "styled-components";
import { style as tss } from 'typestyle';
import { Link } from 'react-router-dom'


type Props = {
  text: string,
  linkTo: string;
  disabled: boolean;
  target?: string;
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
  }),
  unrolled: tss({
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
      disabled ? (
        <StyledHamburgerStripe className={styles.rolled} />
      ) : (
        <a href={this.props.linkTo} target={this.props.target}>
          <StyledHamburgerStripe className={styles.unrolled}>
            {this.props.text}
          </StyledHamburgerStripe>
        </a>
      )
    );
  }
}
