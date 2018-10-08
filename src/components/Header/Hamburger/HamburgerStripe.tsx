import React from "react";
import styled from "styled-components";
import { style as tss } from 'typestyle';
import { Link } from 'react-router-dom';

type Props = {
  text: string,
  linkTo: string;
  disabled: boolean;
  external?: boolean;
};

const StyledHamburgerStripe = styled.div`
  background: #3653ab;
  margin: 4px;
  color: white;
  border-radius: 1px;
`;

const styles = {
  rolled: tss({
    width: 60,
    height: 12,
  }),
  unrolled: tss({
    height: 40,
    width: 'fit-content',
    padding: '10px 10px 0px 10px',
    textAlignLast: 'right',
    fontSize: 25,
  }),
}

export class HamburgerStripe extends React.Component<Props, {}> {
  render() {
    const { disabled, text, external, linkTo } = this.props;
    return (
      disabled ? (
        <StyledHamburgerStripe className={styles.rolled} />
      ) : (
        external ? (
          <a href={linkTo} target={'_blank'} style={{textDecoration: 'none'}}>
            <StyledHamburgerStripe className={styles.unrolled}>
              {text}
            </StyledHamburgerStripe>
          </a>
        ) : (
          <Link
            to={linkTo}
            style={{ textDecoration: 'none' }}
          >
            <StyledHamburgerStripe className={styles.unrolled}>
              {text}
            </StyledHamburgerStripe>
          </Link>
        )
      )
    );
  }
}
