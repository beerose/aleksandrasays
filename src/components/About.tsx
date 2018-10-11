import React, { AllHTMLAttributes, HTMLAttributes } from "react";
import styled from "styled-components";

import { Spring } from "react-spring";
import { Color } from "../Color";
import { Greeting } from "./Greeting";
import PinkClippedLayer from "./PinkClippedLayer";

import { CopyBox } from "./AboutBox";
import { CoreBox } from "./Core";
import { Header } from "./Header";
import { Arrow } from "./Header/Arrow";
import { Hamburger } from "./Header/Hamburger";
import { LoveBox } from "./Love";
import { WorkBox } from "./Work";

const MenuContainer = styled.div`
  width: 100%;
  color: ${Color.Blue};
  display: flex;
  justify-content: center;
  top: 40%;
  position: absolute;
`;

const CopyContainer = styled.div`
  width: 100%;
  color: ${Color.Blue};
  display: flex;
  justify-content: center;
  top: 20%;
  position: absolute;
`;

const AboutContainer = styled(PinkClippedLayer)`
  background: ${Color.Pink};
  display: flex;
`;

type Props = {
  greetingsVisible: boolean;
  mountAbout: boolean;
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
    if (this.props.mountAbout !== nextProps.mountAbout) {
      this.setState({ ...defaultState });
    }
  }
  public render() {
    const { greetingsVisible, mountAbout } = this.props;
    const { menuVisible, coreVisible, loveVisible, workVisible } = this.state;
    // window.about = this;

    return (
      <AboutContainer {...this.props}>
        <Arrow visible={menuVisible && mountAbout} />
        <Hamburger visible={menuVisible && mountAbout} />
        <Greeting unmount={!greetingsVisible} color={Color.Pink} />
        <CopyContainer>
          <CoreBox
            visible={coreVisible && mountAbout}
            onCloseClick={this.handleCloseBoxClick}
          />
          <WorkBox
            visible={workVisible && mountAbout}
            onCloseClick={this.handleCloseBoxClick}
          />
          <LoveBox
            visible={loveVisible && mountAbout}
            onCloseClick={this.handleCloseBoxClick}
          />
        </CopyContainer>
        {menuVisible && (
          <MenuContainer>
            <CopyBox
              shouldMount={mountAbout}
              title={"Core"}
              onClick={this.handleCoreClick}
              delay={mountAbout ? 800 : 0}
            />
            <CopyBox
              shouldMount={mountAbout}
              title={"Love"}
              onClick={this.handleLoveCLick}
              delay={mountAbout ? 800 : 0}
            />
            <CopyBox
              shouldMount={mountAbout}
              title={"Skills"}
              onClick={this.handleWorkClick}
              delay={mountAbout ? 800 : 0}
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

/*

        <Spring
          to={!greetingsVisible ? { x: -90, opacity: 0 } : { x: 0, opacity: 1 }}
          // delay={2000}
          config={{
            friction: 32,
            tension: 50,
          }}
        >
          {({ x, opacity }) => (
            <Copy
              style={{
                opacity,
                transform: `translate3d(${x}vh, 0, 0)`,
              }}
            />
          )}
        </Spring>

*/
