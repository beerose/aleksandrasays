import React, { AllHTMLAttributes } from "react";
import styled from "styled-components";

import { darken } from "polished";
import { Transition } from "react-spring";
import { Color } from "../../Color";

const CopyTitle = styled.div`
  color: ${darken(0.1, Color.TopColor)};
  position: absulote;
  font-size: 4em;
  font-weight: 600;
  line-height: 1.4;
  margin: 30px;
  cursor: pointer;

  &:hover {
    color: ${darken(0.15, Color.TopColor)};
  }
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
