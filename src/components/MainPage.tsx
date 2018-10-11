import React, { AllHTMLAttributes } from "react";
import styled from "styled-components";

import { darken } from "polished";
import { Spring } from "react-spring";
import { Color } from "../Color";
import { Greeting } from "./Greeting";
import { SocialIconsPanel } from "./SocialIcons";

const SocialIconsContainer = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
`;

type Props = { greetingsVisible: boolean } & AllHTMLAttributes<HTMLDivElement>;

class MainPage extends React.Component<Props> {
  public render() {
    const { greetingsVisible } = this.props;
    return (
      <div style={{ position: "relative", height: "100%" }}>
        <Greeting unmount={!greetingsVisible} color={Color.Blue} />
        <SocialIconsContainer>
          <SocialIconsPanel />
        </SocialIconsContainer>
      </div>
    );
  }
}

export default MainPage;
