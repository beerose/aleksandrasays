import React, { AllHTMLAttributes } from "react";
import styled from "styled-components";

import { Transition } from "react-spring";
import { cancel } from "../../assets/svg";
import { Color } from "../../Color";
import { StyledCancel } from "./StyledCancel";

const copy = `My name is Aleksandra Sikora and I am a full-stack developer from Wrocław.
I'm a functional programming enthusiast, constantly experimenting with new
technologies. I'm very passionate about web development and web design,
striving to improve my skills every day.`;

const anotherCopy = `
Before starting working as a developer
I’ve been a robotics and informatics teacher for children,
which gave me a nice opportunity to learn how to stay extremely calm and patient whatever happens.
`;

const TextComponent = styled.div`
  color: ${Color.DarkPrimaryColor};
  border: 1px solid ${Color.PrimaryColor};
  padding: 20px;
  position: absolute;
  font-size: 1.5em;
  font-weight: 150;
  line-height: 1.4;
  border-radius: 1px;
  max-width: 55%;

  @media (max-device-width: 650px) {
    font-size: 30px;
    max-width: 65%;
  }
  @media (max-device-width: 580px) {
    font-size: 35px;
    max-width: 70%;
  }
  @media (max-device-width: 480px) {
    font-size: 35px;
    max-width: 75%;
  }
`;

type CoreBoxProps = {
  onCloseClick: () => void;
  visible: boolean;
} & AllHTMLAttributes<HTMLDivElement>;
export const CoreBox = (props: CoreBoxProps) => {
  const { onCloseClick, visible, onClick } = props;
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
          <TextComponent
            style={{
              position: "absolute",
              opacity,
              transform: `scale(${scale}, ${scale})`,
            }}
            onClick={onClick}
          >
            <StyledCancel src={cancel} onClick={onCloseClick} />
            {copy}
            <br />
            {anotherCopy}
          </TextComponent>
        ))}
    </Transition>
  );
};
