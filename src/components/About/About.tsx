import React, { AllHTMLAttributes } from "react";
import styled from "styled-components";

import { Color } from "../../Color";

import TopColorClippedLayer from "../TopColorClippedLayer";
import { CopyBox } from "./AboutBox";
import { CoreBox } from "./Core";
import { LoveBox } from "./Love";
import { SkillsBox } from "./Skills";

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
  aboutVisible: boolean;
} & AllHTMLAttributes<HTMLDivElement>;

const enum AboutSection {
  Core = "/core",
  Love = "/love",
  Work = "/work",
  Menu = "/",
}

const defaultState = {
  currentSection: AboutSection.Menu,
};

type State = typeof defaultState;

export default class About extends React.Component<Props, State> {
  public state = defaultState;

  public componentWillReceiveProps(nextProps: Props) {
    if (this.props.aboutVisible !== nextProps.aboutVisible) {
      this.setState({ ...defaultState });
    }
  }
  public render() {
    const { aboutVisible } = this.props;
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
        {currentSection === AboutSection.Menu && (
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
              onClick={this.handleLoveClick}
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

  private goToSection(section: AboutSection) {
    // history push mby?
    this.setState({ currentSection: section });
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
