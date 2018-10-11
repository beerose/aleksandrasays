import React, { AllHTMLAttributes, HTMLAttributes } from "react";
import styled from "styled-components";

import { darken, lighten } from "polished";
import { Spring, Transition } from "react-spring";
import { cancel } from "../assets/svg/";
import { Color } from "../Color";

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
  color: ${darken(0.3, Color.Pink)};
  border: 1px solid ${darken(0.1, Color.Pink)};
  padding: 20px;
  position: absulote;
  font-size: 1.5em;
  font-weight: 150;
  line-height: 1.4;
  border-radius: 1px;
  margin: 30px;
  max-width: 45%;
`;

const StyledImg = styled("img")`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  transform: translate3d(10px, -10px, 0);
  cursor: pointer;
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
    >
      {visible &&
        (({ scale, opacity }) => (
          <>
            <TextComponent
              style={{
                opacity,
                transform: `scale(${scale}, ${scale})`,
              }}
              onClick={onClick}
            >
              <StyledImg src={cancel} onClick={onCloseClick} />
              {copy}
              <br />
              {anotherCopy}
            </TextComponent>
          </>
        ))}
    </Transition>
  );
};
