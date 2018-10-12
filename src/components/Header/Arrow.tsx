import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { Transition } from "react-spring";
import { arrow } from "../../assets/svg";

const StyledArrow = styled("img")`
  width: 45px;
  position: absolute;
  top: 25px;
  left: 25px;
  path {
    fill: pink;
  }
`;

export const Arrow = ({ visible }: { visible: boolean }) => (
  <Transition
    from={{ opacity: 0, scale: 0 }}
    enter={{ opacity: 1, scale: 1 }}
    leave={{ opacity: 0, scale: 0 }}
    config={{ friction: 5, tension: 30 }}
    delay={visible ? 1300 : 0}
  >
    {visible &&
      (({ scale, opacity }) => (
        <Link to={"/"}>
          <StyledArrow
            style={{ opacity, transform: `scale(${scale}, ${scale})` }}
            src={arrow}
          />
        </Link>
      ))}
  </Transition>
);
