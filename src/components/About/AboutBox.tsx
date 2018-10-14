import React, { AllHTMLAttributes } from "react";
import styled from "styled-components";

import { Color } from "../../Color";

const CopyTitle = styled.div`
  color: ${Color.PrimaryColor};
  position: absulote;
  font-size: 4em;
  font-weight: 600;
  line-height: 1.4;
  margin: 30px;
  cursor: pointer;

  &:hover {
    color: ${Color.DarkPrimaryColor};
  }
`;

type CopyBoxProps = {
  title: string;
  onClick: () => void;
} & AllHTMLAttributes<HTMLDivElement>;
export const CopyBox = (props: CopyBoxProps) => {
  const { title, onClick } = props;
  return <CopyTitle onClick={onClick}>{title}</CopyTitle>;
};
