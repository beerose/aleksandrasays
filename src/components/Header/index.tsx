import React from "react";

import { Link } from "react-router-dom";
import { Transition } from "react-spring";
import { IconArrow } from "../Icons";
import { Hamburger } from "./Hamburger";
import { Color } from "../../Color";

export const Header = ({ showArrow }: { showArrow: boolean }) => (
  <>
    <Transition
      from={{ opacity: 0, scale: 0 }}
      enter={{ opacity: 1, scale: 1 }}
      leave={{ opacity: 0, scale: 0 }}
      config={{ friction: 10, tension: 70 }}
      delay={0}
    >
      {showArrow &&
        (({ opacity }) => (
          <Link
            to={"/"}
            style={{
              left: "20px",
              opacity,
              position: "absolute",
              top: "10px",
            }}
          >
            <IconArrow color={Color.PrimaryColor} />
          </Link>
        ))}
    </Transition>
    <Hamburger color={Color.PrimaryColor} />
  </>
);
