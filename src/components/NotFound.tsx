import React, { AllHTMLAttributes } from "react";
import styled from "styled-components";

import { Transition } from "react-spring";
import { notFound } from "../assets/svg";
import { Color } from "../Color";

const NotFoundContainer = styled.div`
  color: ${Color.DarkPrimaryColor};
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  font-weight: 150;
  line-height: 1.4;
  border-radius: 1px;

  @media (max-device-width: 650px) {
    font-size: 30px;
  }
  @media (max-device-width: 580px) {
    font-size: 35px;
  }
  @media (max-device-width: 480px) {
    font-size: 35px;
  }
`;

const StyledNotFoundImage = styled.img`
  max-width: 200px;
`;

const copy = "Oops, the page you're looking for have flown away.";

type NotFoundProps = {
  visible: boolean;
} & AllHTMLAttributes<HTMLDivElement>;
export const NotFoundPage = (props: NotFoundProps) => {
  const { visible } = props;
  return (
    <Transition
      from={{ opacity: 0, scale: 0.9 }}
      enter={{ scale: 1.1, opacity: 1 }}
      leave={{ opacity: 0, scale: 0 }}
      config={{ friction: 5, tension: 15, velocity: 5 }}
      delay={250}
    >
      {visible &&
        (({ scale, opacity }) => (
          <NotFoundContainer
            style={{
              position: "absolute",
              opacity,
              transform: `scale(${scale}, ${scale})`,
            }}
          >
            <StyledNotFoundImage src={notFound} />
            {copy}
          </NotFoundContainer>
        ))}
    </Transition>
  );
};
