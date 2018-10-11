import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { style as tss } from "typestyle";
import { Color } from "../../../Color";
import { darken } from "polished";

type Props = {
  text: string;
  linkTo: string;
  disabled: boolean;
  external?: boolean;
};

const StyledHamburgerStripe = styled.div`
  margin: 4px;
  border-radius: 3px;

  -webkit-transition: height 2s; /* Safari */
  transition: height 2s;
`;

const styles = {
  rolled: tss({
    background: darken(0.25, Color.Pink),
    height: 4,
    width: 45,
  }),
  unrolled: tss({
    border: `2.3px solid ${darken(0.25, Color.Pink)}`,
    color: darken(0.25, Color.Pink),
    fontSize: 25,
    height: 40,
    padding: "10px 10px 0px 10px",
    textAlignLast: "right",
    width: "fit-content",
  }),
};

export class HamburgerStripe extends React.Component<Props, {}> {
  public render() {
    const { disabled, text, external, linkTo } = this.props;
    return disabled ? (
      <StyledHamburgerStripe className={styles.rolled} />
    ) : external ? (
      <a href={linkTo} target={"_blank"} style={{ textDecoration: "none" }}>
        <StyledHamburgerStripe className={styles.unrolled}>
          {text}
        </StyledHamburgerStripe>
      </a>
    ) : (
      <Link to={linkTo} style={{ textDecoration: "none" }}>
        <StyledHamburgerStripe className={styles.unrolled}>
          {text}
        </StyledHamburgerStripe>
      </Link>
    );
  }
}
