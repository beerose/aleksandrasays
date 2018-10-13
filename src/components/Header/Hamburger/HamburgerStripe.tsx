import { darken } from "polished";
import React from "react";
import { Link } from "react-router-dom";
import { Transition } from "react-spring";
import styled from "styled-components";
import { Color } from "../../../Color";

const TopColorStyledHamburgerStripe = styled.div`
  margin: 4px;
  border-radius: 3px;
  background: ${darken(0.2, Color.TopColor)};
  width: 45px;
  font-size: 25px;
  height: 4px;
  color: ${darken(0.2, Color.TopColor)};
  text-align-last: right;

  &:hover {
    color: ${darken(0.3, Color.TopColor)};
  }
`;

const BottomColorStyledHamburgerStripe = styled.div`
  margin: 4px;
  border-radius: 2px;
  background: ${darken(0.15, Color.BottomColor)};
  width: 45px;
  font-size: 25px;
  height: 4px;
  color: ${darken(0.15, Color.BottomColor)};
  text-align-last: right;

  &:hover {
    color: ${darken(0.3, Color.BottomColor)};
  }
`;

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

type Props = {
  color: string;
  text: string;
  linkTo: string;
  disabled: boolean;
  external?: boolean;
};
export class HamburgerStripe extends React.Component<Props, {}> {
  public render() {
    const { disabled, text, external, linkTo, color } = this.props;
    const Stripe =
      color === Color.TopColor
        ? TopColorStyledHamburgerStripe
        : BottomColorStyledHamburgerStripe;
    return disabled ? (
      <Stripe />
    ) : (
      <Transition
        from={{
          background: darken(0.2, color),
          height: 5,
          width: 50,
        }}
        enter={{
          background: "none",
          border: `2.3px solid ${darken(0.2, color)}`,
          height: 40,
          padding: "10px 10px 0px 10px",
          width: "fit-content",
        }}
        leave={{
          background: darken(0.2, color),
          height: 5,
          width: 50,
        }}
        config={{ friction: 15, tension: 200 }}
      >
        {!disabled &&
          (({ height, width, background, border, padding }) =>
            external ? (
              <a
                href={linkTo}
                target={"_blank"}
                style={{ textDecoration: "none" }}
              >
                <Stripe
                  color={color}
                  style={{
                    background,
                    border,
                    height,
                    padding,
                    width,
                  }}
                >
                  <HamburgerText text={text} display={!disabled} delay={100} />
                </Stripe>
              </a>
            ) : (
              <Link to={linkTo} style={{ textDecoration: "none" }}>
                <Stripe
                  style={{
                    background,
                    border,
                    height,
                    padding,
                    width,
                  }}
                >
                  <HamburgerText text={text} display={!disabled} delay={100} />
                </Stripe>
              </Link>
            ))}
      </Transition>
    );
  }
}
