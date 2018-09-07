import React from "react";
import styled from "styled-components";
import { style as tss } from 'typestyle';

type Props = {
  text: string,
  linkTo: string;
  disabled: boolean;
  target?: string;
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

export class HamburgerStripe extends React.Component<Props, {}> {
  render() {
    const { disabled, text, target } = this.props;
    return (
      disabled ? (
        <StyledHamburgerStripe className={styles.rolled} />
      ) : (
        <a href={this.props.linkTo} target={target}>
          <StyledHamburgerStripe className={styles.unrolled}>
            {text}
          </StyledHamburgerStripe>
        </a>
      )
    );
  }
}
