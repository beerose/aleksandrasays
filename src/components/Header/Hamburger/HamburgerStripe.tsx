import React from "react";
import { Transition, Spring } from "react-spring";
import styled from "styled-components";
import { Link } from "./Link";
import { Color } from "../../../Color";

const Stripe = styled.div`
  /* Internet Explorer */
  min-width: 44px;
  min-height: 4px;

  margin: 4px;
  border-radius: 2px;
  font-size: 25px;

  --size: 4px;
  min-width: calc(11 * var(--size));
  min-height: var(--size);
  margin: var(--size);
  border-radius: calc(var(--size) / 2);

  background: ${Color.PrimaryColor};
  color: ${Color.PrimaryColor};
  &:hover {
    color: ${Color.DarkPrimaryColor};
  }

  @media (max-device-width: 690px) {
    --size: 8px;
    font-size: 35px;
  }
  @media (max-device-width: 580px) {
    --size: 10px;
    font-size: 35px;
  }
`;

const HamburgerText = ({
  text,
  display,
}: {
  text: string;
  display: boolean;
}) => (
  <Transition
    from={{ opacity: 0 }}
    enter={{ opacity: 1 }}
    leave={{ opacity: 0 }}
    config={{ friction: 5, tension: 40 }}
    delay={150}
  >
    {display &&
      (({ opacity }) => <p style={{ opacity, margin: "0" }}>{text}</p>)}
  </Transition>
);

const closeStyles = {
  background: Color.PrimaryColor,
  border: `0px solid ${Color.PrimaryColor}`,
  padding: "0px",
  pointerEvents: "none",
};

const openStyles = {
  background: Color.Transparent,
  border: `2.3px solid ${Color.PrimaryColor}`,
  padding: "10px",
  pointerEvents: "initial",
};

type Props = {
  text: string;
  linkTo: string;
  open: boolean;
  external?: boolean;
};

export class HamburgerStripe extends React.Component<Props, {}> {
  public render() {
    const { open, text, external, linkTo } = this.props;

    return (
      <Spring
        to={open ? openStyles : closeStyles}
        from={closeStyles}
        config={{ friction: 15, tension: 150 }}
      >
        {style => (
          <Link external={external} linkTo={linkTo} enabled={open}>
            <Stripe style={{ ...style }}>
              {open && <HamburgerText text={text} display={open} />}
            </Stripe>
          </Link>
        )}
      </Spring>
    );
  }
}
