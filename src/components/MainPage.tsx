import React, { AllHTMLAttributes } from "react";
import styled from "styled-components";

import { darken } from "polished";
import { Color } from "../Color";
import { Greeting } from "./Greeting";
import { Header } from "./Header/Header";
import { SocialIconsPanel } from "./SocialIcons";

const SocialIconsContainer = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
`;

type Props = { greetingsVisible: boolean } & AllHTMLAttributes<HTMLDivElement>;

class MainPage extends React.Component<Props> {
  public render() {
    const { greetingsVisible } = this.props;
    return (
      <div style={{ position: "relative", height: "100%" }}>
        <Greeting visible={greetingsVisible} color={Color.BottomColor} />
        <SocialIconsContainer>
          <SocialIconsPanel
            color={darken(0.1, Color.BottomColor)}
            visible={greetingsVisible}
          />
        </SocialIconsContainer>
      </div>
    );
  }
}

export default MainPage;
