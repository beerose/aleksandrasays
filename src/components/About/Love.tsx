import React, { AllHTMLAttributes } from "react";
import Typist from "react-typist";
import styled from "styled-components";

import { Transition } from "react-spring";
import { cancel, dice } from "../../assets/svg";
import { Color } from "../../Color";
import { StyledCancel } from "./StyledCancel";

const whatILike = [
  "playing tennis",
  "climbing",
  "hiking",
  "coofee",
  "reading books",
  "watching netflix",
  "art galleries",
  "traveling",
  "riding a bike",
  "cooking",
  "flowers",
];

const LoveContainer = styled.div`
  color: ${Color.DarkPrimaryColor};
  padding-top: 60px;
  position: absolute;
  font-size: 1.5em;
  font-weight: 150;
  line-height: 1.4;
  border-radius: 1px;
  max-width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-device-width: 650px) {
    font-size: 35px;
    max-width: 65%;
  }
  @media (max-device-width: 580px) {
    font-size: 45px;
    max-width: 70%;
  }
  @media (max-device-width: 480px) {
    font-size: 45px;
    max-width: 75%;
  }
`;

const StyledDice = styled("img")`
  width: 60px;
  height: 60px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1, 1.1);
  }

  @media (max-device-width: 650px) {
    width: 65px;
    height: 65px;
  }
  @media (max-device-width: 580px) {
    width: 75px;
    height: 75px;
  }
  @media (max-device-width: 480px) {
    width: 90px;
    height: 90px;
  }
`;

const StyledTitle = styled.div`
  font-weight: 120;
  font-size: 1.5em;
`;

const DiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 20px;
  margin: 30px;
`;

const TypedTitle = ({ text }: { text: string }) => (
  <StyledTitle>
    I really, really like
    <Typist key={text}> {text}</Typist>
  </StyledTitle>
);

type LoveBoxProps = {
  onCloseClick: () => void;
  visible: boolean;
} & AllHTMLAttributes<HTMLDivElement>;
type State = {
  iLike: string;
};
export class LoveBox extends React.Component<LoveBoxProps, State> {
  public state = {
    iLike: this.getRandomStuff(),
  };

  public onDiceClick() {
    this.setState({ iLike: this.getRandomStuff() });
  }
  public render() {
    const { onCloseClick, visible, onClick } = this.props;
    return (
      <Transition
        from={{ opacity: 0, scale: 0.9 }}
        enter={{ scale: 1.1, opacity: 1 }}
        leave={{ opacity: 0, scale: 0 }}
        config={{ friction: 5, tension: 15, velocity: 5 }}
      >
        {visible &&
          (({ scale, opacity }) => (
            <LoveContainer
              style={{
                opacity,
                transform: `scale(${scale}, ${scale})`,
              }}
              onClick={onClick}
            >
              <TypedTitle text={this.state.iLike} />
              <StyledCancel src={cancel} onClick={onCloseClick} />
              <DiceContainer>
                <StyledDice src={dice} onClick={this.onDiceClick.bind(this)} />
                Click me!
              </DiceContainer>
            </LoveContainer>
          ))}
      </Transition>
    );
  }
  private getRandomStuff() {
    return whatILike[Math.round(Math.random() * (whatILike.length - 1))];
  }
}
