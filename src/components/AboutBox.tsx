import React, { AllHTMLAttributes, HTMLAttributes } from "react";
import styled from "styled-components";

import { darken, lighten } from "polished";
import { Spring, Transition } from "react-spring";
import { Color } from "../Color";

const CopyContainer = styled.div``;

const CopyTitle = styled.div`
  color: ${darken(0.1, Color.Pink)};
  position: absulote;
  font-size: 4em;
  font-weight: 600;
  line-height: 1.4;
  border-radius: 1px;
  margin: 30px;
  cursor: pointer;
`;

type CopyBoxProps = {
  title: string;
  onClick: () => void;
  delay: number;
  shouldMount: boolean;
} & AllHTMLAttributes<HTMLDivElement>;
export const CopyBox = (props: CopyBoxProps) => {
  const { title, delay, shouldMount, onClick } = props;
  return (
    <Transition
      from={{ opacity: 0, scale: 0.9 }}
      enter={{ scale: 1.1, opacity: 1 }}
      leave={{ opacity: 0, scale: 0 }}
      delay={delay}
      config={{ duration: 1000 }}
    >
      {shouldMount &&
        (({ scale, opacity }) => (
          <CopyTitle
            style={{
              opacity,
              transform: `scale(${scale}, ${scale})`,
            }}
            onClick={onClick}
          >
            {title}
          </CopyTitle>
        ))}
    </Transition>
  );
};
