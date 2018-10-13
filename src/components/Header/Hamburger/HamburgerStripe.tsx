import React from "react";
import { Transition } from "react-spring";
import styled from "styled-components";
import { Link } from "./Link";
import { Color } from "../../../Color";

const Stripe = styled.div`
  font-size: 25px;

  /* Internet Explorer */
  min-width: 44px;
  height: 4px;
  margin: 4px;
  border-radius: 2px;

  --size: 4px;
  min-width: calc(11 * var(--size));
  height: var(--size);
  margin: var(--size);
  border-radius: calc(var(--size) / 2);

  background: ${Color.PrimaryColor};
  color: ${Color.PrimaryColor};
  &:hover {
    color: ${Color.DarkPrimaryColor};
  }

  @media (max-device-width: 690px) {
    --size: 8px;
  }
  @media (max-device-width: 580px) {
    --size: 10px;
  }
  @media (max-device-width: 480px) {
    --size: 12px;
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
  text: string;
  linkTo: string;
  disabled: boolean;
  external?: boolean;
};

export type LinkProps = {
  linkTo: string;
  style: React.CSSProperties;
  external?: boolean;
  children?: React.ReactNode;
};

export class HamburgerStripe extends React.Component<Props, {}> {
  public render() {
    const { disabled, text, external, linkTo } = this.props;

    return disabled ? (
      <Stripe color={Color.PrimaryColor} />
    ) : (
      <Link
        external={external}
        linkTo={linkTo}
        style={{
          textDecoration: "none",
        }}
      >
        <Transition
          from={{
            background: Color.PrimaryColor,
            height: 5,
          }}
          enter={{
            background: "none",
            border: `2.3px solid ${Color.PrimaryColor}`,
            height: 40,
            padding: "10px 10px 0px 10px",
          }}
          leave={{
            background: Color.PrimaryColor,
            height: 5,
          }}
          config={{ friction: 15, tension: 200 }}
        >
          {!disabled &&
            (style => (
              <Stripe style={{ ...style, pointerEvents: "initial" }}>
                <HamburgerText text={text} display={!disabled} delay={100} />
              </Stripe>
            ))}
        </Transition>
      </Link>
    );
  }
}
