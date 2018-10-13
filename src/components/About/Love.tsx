import React, { AllHTMLAttributes } from "react";
import Typist from "react-typist";
import styled from "styled-components";

import { darken } from "polished";
import { Transition } from "react-spring";
import { cancel, dice } from "../../assets/svg";
import { Color } from "../../Color";

const whatILike = [
  " tennis",
  " climbing",
  " reading books",
  " binge watching netflix",
  " art galleries",
  " traveling",
  " riding a bike",
  " cooking",
  " getting flowers",
];

const LoveContainer = styled.div`
  color: ${darken(0.3, Color.TopColor)};
  padding-top: 60px;
  position: absulote;
  font-size: 1.5em;
  font-weight: 150;
  line-height: 1.4;
  border-radius: 1px;
  max-width: 40%;
  min-width: 40%;
  display: flex;
  justify-content: center;
  height: 250px;
`;

const StyledCancel = styled("img")`
  position: absolute;
  top: 0;
  right: 0;
  width: 20px;
  height: 20px;
  transform: translate3d(10px, -10px, 0);
  cursor: pointer;
`;

const StyledDice = styled("img")`
  width: 60px;
  height: 60px;
  cursor: pointer;
  padding: 5px;

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

const StyledTitle = styled.div`
  font-weight: 120;
  font-size: 1.5em;
`;

const DiceContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  flex-direction: column;
  bottom: 15px;

  font-size: 15px;
`;

const TypedTitle = ({ text }: { text: string }) => (
  <StyledTitle>
    I really, really like
    <Typist key={text}>{text}</Typist>
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
    return whatILike[Math.round(Math.random() * whatILike.length)];
  }
}
