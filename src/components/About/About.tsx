import React, { AllHTMLAttributes } from "react";
import styled from "styled-components";

import { Color } from "../../Color";
import { Greeting } from "../Greeting";

import { Header } from "../Header/Header";
import TopColorClippedLayer from "../TopColorClippedLayer";
import { CopyBox } from "./AboutBox";
import { CoreBox } from "./Core";
import { LoveBox } from "./Love";
import { WorkBox } from "./Work";

const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  top: 40%;
  position: absolute;
`;

const CopyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  top: 20%;
  position: absolute;
`;

const AboutContainer = styled(TopColorClippedLayer)`
  background: ${Color.TopColor};
  display: flex;
`;

type Props = {
  greetingsVisible: boolean;
  aboutVisible: boolean;
} & AllHTMLAttributes<HTMLDivElement>;

type State = {
  coreVisible: boolean;
  loveVisible: boolean;
  workVisible: boolean;
  menuVisible: boolean;
};
const defaultState = {
  coreVisible: false,
  loveVisible: false,
  menuVisible: true,
  workVisible: false,
};
export default class About extends React.Component<Props, State> {
  public state = defaultState;

  public componentWillReceiveProps(nextProps: Props) {
    if (this.props.aboutVisible !== nextProps.aboutVisible) {
      this.setState({ ...defaultState });
    }
  }
  public render() {
    const { greetingsVisible, aboutVisible } = this.props;
    const { menuVisible, coreVisible, loveVisible, workVisible } = this.state;

    return (
      <AboutContainer {...this.props}>
        <Greeting visible={greetingsVisible} color={Color.TopColor} />
        <CopyContainer>
          <CoreBox
            visible={coreVisible && aboutVisible}
            onCloseClick={this.handleCloseBoxClick}
          />
          <WorkBox
            visible={workVisible && aboutVisible}
            onCloseClick={this.handleCloseBoxClick}
          />
          <LoveBox
            visible={loveVisible && aboutVisible}
            onCloseClick={this.handleCloseBoxClick}
          />
        </CopyContainer>
        {menuVisible && (
          <MenuContainer>
            <CopyBox
              shouldMount={aboutVisible}
              title={"Core"}
              onClick={this.handleCoreClick}
              delay={aboutVisible ? 800 : 0}
            />
            <CopyBox
              shouldMount={aboutVisible}
              title={"Love"}
              onClick={this.handleLoveCLick}
              delay={aboutVisible ? 800 : 0}
            />
            <CopyBox
              shouldMount={aboutVisible}
              title={"Skills"}
              onClick={this.handleWorkClick}
              delay={aboutVisible ? 800 : 0}
            />
          </MenuContainer>
        )}
      </AboutContainer>
    );
  }

  private handleLoveCLick = () => {
    this.setState({ loveVisible: true, menuVisible: false });
  };

  private handleWorkClick = () => {
    this.setState({ workVisible: true, menuVisible: false });
  };

  private handleCoreClick = () => {
    this.setState({ coreVisible: true, menuVisible: false });
  };

  private handleCloseBoxClick = () => {
    this.setState({ ...defaultState });
  };
}
