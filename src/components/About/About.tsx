import React, { AllHTMLAttributes } from "react";
import styled from "styled-components";

import { CopyBox } from "./AboutBox";
import { CoreBox } from "./Core";
import { LoveBox } from "./Love";
import { SkillsBox } from "./Skills";
import { Spring } from "react-spring";

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

const AboutContainer = styled.div`
  display: flex;
`;

type Props = {
  aboutVisible: boolean;
} & AllHTMLAttributes<HTMLDivElement>;

const enum AboutSection {
  Core = "/core",
  Love = "/love",
  Work = "/work",
  Menu = "/",
  None = "",
}

const defaultState = {
  currentSection: AboutSection.None,
};

type State = typeof defaultState;

export default class About extends React.Component<Props, State> {
  public state = defaultState;

  public componentWillReceiveProps(nextProps: Props) {
    nextProps.aboutVisible
      ? this.setState({ currentSection: AboutSection.Menu })
      : this.setState({ currentSection: AboutSection.None });
  }
  public render() {
    const { currentSection } = this.state;

    return (
      <AboutContainer {...this.props}>
        <CopyContainer>
          <CoreBox
            visible={currentSection === AboutSection.Core}
            onCloseClick={this.handleCloseBoxClick}
          />
          <SkillsBox
            visible={currentSection === AboutSection.Work}
            onCloseClick={this.handleCloseBoxClick}
          />
          <LoveBox
            visible={currentSection === AboutSection.Love}
            onCloseClick={this.handleCloseBoxClick}
          />
        </CopyContainer>
        <Spring
          to={
            currentSection === AboutSection.Menu
              ? { scale: 1.1, opacity: 1 }
              : { opacity: 0, scale: 0.9 }
          }
          config={{ friction: 5, tension: 60 }}
          delay={currentSection === AboutSection.Menu ? 800 : 0}
        >
          {({ opacity, scale }) => (
            <MenuContainer
              style={{ opacity, transform: `scale(${scale}, ${scale})` }}
            >
              <CopyBox title={"Core"} onClick={this.handleCoreClick} />
              <CopyBox title={"Love"} onClick={this.handleLoveClick} />
              <CopyBox title={"Skills"} onClick={this.handleWorkClick} />
            </MenuContainer>
          )}
        </Spring>
      </AboutContainer>
    );
  }

  private goToSection(section: AboutSection) {
    this.props.aboutVisible
      ? this.setState({ currentSection: section })
      : this.setState({ currentSection: AboutSection.None });
  }

  private handleLoveClick = () => {
    this.goToSection(AboutSection.Love);
  };

  private handleWorkClick = () => {
    this.goToSection(AboutSection.Work);
  };

  private handleCoreClick = () => {
    this.goToSection(AboutSection.Core);
  };

  private handleCloseBoxClick = () => {
    this.goToSection(AboutSection.Menu);
  };
}
