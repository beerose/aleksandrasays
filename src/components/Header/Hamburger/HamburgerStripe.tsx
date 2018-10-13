import { darken } from "polished";
import React from "react";
import { Transition, Spring } from "react-spring";
import styled, { css } from "styled-components";
import { Link } from "./Link";

type StripeProps = {
  color: string;
} & React.HTMLAttributes<HTMLDivElement>;

const Stripe = styled.div`
  margin: 4px;
  border-radius: 2px;
  min-width: 45px;
  font-size: 25px;
  height: 4px;
  text-align-last: right;

  ${({ color }: StripeProps) => css`
    background: ${darken(0.15, color)};
    color: ${darken(0.15, color)};
    &:hover {
      color: ${darken(0.3, color)};
    }
  `};
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

const makeClosedStyle = (color: string) => ({
  background: darken(0.2, color),
  border: "none",
  height: 5,
  padding: "0px 0px 0 0px",
});

const makeOpenStyle = (color: string) => ({
  background: "none",
  border: `2.3px solid ${darken(0.2, color)}`,
  height: 40,
  padding: "10px 10px 0 10px",
});

export class HamburgerStripe extends React.Component<Props, {}> {
  public render() {
    const { disabled, text, external, linkTo, color } = this.props;

    return (
      <Link
        external={external}
        linkTo={linkTo}
        disabled={disabled}
        style={{
          textDecoration: "none",
        }}
      >
        <Spring
          to={disabled ? makeClosedStyle(color) : makeOpenStyle(color)}
          config={{ friction: 15, tension: 200 }}
        >
          {style => (
            <Stripe color={color} style={style}>
              {!disabled && (
                <HamburgerText text={text} display={!disabled} delay={100} />
              )}
            </Stripe>
          )}
        </Spring>
      </Link>
    );
  }
}
