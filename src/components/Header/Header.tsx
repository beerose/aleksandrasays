import React from "react";

import { darken } from "polished";
import { Link } from "react-router-dom";
import { Transition } from "react-spring";
import { IconArrow } from "../Icons";
import { Hamburger } from "./Hamburger";
import { Color } from "../../Color";

export const Header = ({
  visible,
  color,
  showArrow,
}: {
  visible: boolean;
  showArrow: boolean;
  color: string;
}) => (
  <Transition
    from={{ opacity: 0, scale: 0 }}
    enter={{ opacity: 1, scale: 1 }}
    leave={{ opacity: 0, scale: 0 }}
    config={{ friction: 10, tension: 70 }}
    delay={0}
  >
    {visible &&
      (({ opacity }) => (
        <>
          {showArrow && (
            <Link
              to={"/"}
              style={{
                left: "20px",
                opacity,
                position: "absolute",
                top: "10px",
              }}
            >
              <IconArrow color={darken(0.15, color)} />
            </Link>
          )}
          <span
            style={{ opacity: color === Color.BottomColor ? "1" : opacity }}
          >
            <Hamburger visible={true} color={color} />
          </span>
        </>
      ))}
  </Transition>
);
