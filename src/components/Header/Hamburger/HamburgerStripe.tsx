import { darken } from "polished";
import React from "react";
import { Link } from "react-router-dom";
import { Transition } from "react-spring";
import styled from "styled-components";
import { Color } from "../../../Color";

type Props = {
  text: string;
  linkTo: string;
  disabled: boolean;
  external?: boolean;
};

const StyledHamburgerStripe = styled.div`
  margin: 4px;
  border-radius: 3px;
  background: ${darken(0.25, Color.Pink)};
  width: 45px;
  font-size: 25px;
  height: 4px;
  color: ${darken(0.25, Color.Pink)};
  text-align-last: right;
`;
// padding: 10px 10px 0px 10px;

/* const styles = {
  unrolled: tss({
    height: 40,
    width: "fit-content",
  }),
};
*/

const HamburgerText = ({
  text,
  delay,
  display,
}: {
  text: string;
  delay: number;
  display: boolean;
}) => (
  <Transition
    from={{ opacity: 0 }}
    enter={{ opacity: 1 }}
    leave={{ opacity: 0 }}
    config={{ friction: 5, tension: 40 }}
    delay={delay}
  >
    {display &&
      (({ opacity }) => <p style={{ opacity, margin: "0" }}>{text}</p>)}
  </Transition>
);

export class HamburgerStripe extends React.Component<Props, {}> {
  public render() {
    const { disabled, text, external, linkTo } = this.props;
    return disabled ? (
      <StyledHamburgerStripe />
    ) : (
      <Transition
        from={{
          background: darken(0.25, Color.Pink),
          color: Color.Pink,
          height: 2,
          width: 30,
        }}
        enter={{
          background: "none",
          border: `2.3px solid ${darken(0.25, Color.Pink)}`,
          height: 40,
          padding: "10px 10px 0px 10px",
          width: "fit-content",
        }}
        leave={{
          background: darken(0.25, Color.Pink),
          color: Color.Pink,
          height: 2,
          width: 30,
        }}
        config={{ friction: 15, tension: 200 }}
      >
        {!disabled &&
          (({ height, width, background, border, padding, color }) =>
            external ? (
              <a
                href={linkTo}
                target={"_blank"}
                style={{ textDecoration: "none" }}
              >
                <StyledHamburgerStripe
                  style={{
                    background,
                    border,
                    height,
                    padding,
                    width,
                  }}
                >
                  <HamburgerText text={text} display={!disabled} delay={100} />
                </StyledHamburgerStripe>
              </a>
            ) : (
              <Link to={linkTo} style={{ textDecoration: "none" }}>
                <StyledHamburgerStripe
                  style={{
                    background,
                    border,
                    height,
                    padding,
                    width,
                  }}
                >
                  <HamburgerText text={text} display={!disabled} delay={100} />
                </StyledHamburgerStripe>
              </Link>
            ))}
      </Transition>
    );
  }
}
