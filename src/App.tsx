import React from "react";
import {
  BrowserRouter as Router,
  RouteComponentProps,
  withRouter,
} from "react-router-dom";
import { Spring } from "react-spring";
import styled from "styled-components";

import { Color } from "./Color";
import { About, Contact } from "./components/";
import { Header } from "./components/Header/Header";
import { Greeting } from "./components/Greeting";
import { SocialIcons } from "./components/SocialIcons";
import { AnimatedPath } from "./components/AnimatedPath";

const Content = styled.div`
  background-color: ${Color.BottomColor};
  width: 100%;
  height: 100%;
`;

const enum AppSection {
  About = "/about",
  Contact = "/contact",
  Main = "/",
  None = "",
}

const initialState = {
  currentSection: AppSection.None,
};

const SocialIconsContainer = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
`;

type MainProps = RouteComponentProps<any>;
type State = typeof initialState;
export class Main extends React.Component<MainProps, State> {
  public state = initialState;

  public componentDidMount() {
    switch (this.props.location.pathname) {
      case "/":
        this.setState({
          currentSection: AppSection.Main,
        });
        return;
      case "/about":
        this.setState({
          currentSection: AppSection.About,
        });
        return;
      case "/contact":
        this.setState({
          currentSection: AppSection.Contact,
        });
    }
  }

  public componentWillReceiveProps(nextProps: MainProps) {
    if (nextProps.location.pathname === this.props.location.pathname) {
      return;
    }
    switch (nextProps.location.pathname) {
      case "/":
        this.setState({
          currentSection: AppSection.Main,
        });
        return;
      case "/about":
        this.setState({
          currentSection: AppSection.About,
        });
        return;
      case "/contact":
        this.setState({
          currentSection: AppSection.Contact,
        });
    }
  }

  public render() {
    const {
      location: { pathname },
    } = this.props;

    const { currentSection } = this.state;

    return (
      <>
        <AnimatedPath pathname={pathname} />
        <About visible={currentSection === AppSection.About} />
        <Greeting visible={currentSection === AppSection.Main} />
        <Contact visible={currentSection === AppSection.Contact} />
        <SocialIconsContainer>
          <SocialIcons />
        </SocialIconsContainer>
        <Header showArrow={pathname !== "/"} />
      </>
    );
  }
}

const MainWithRouter = withRouter(Main);

export const App = () => (
  <Router>
    <Content>
      <MainWithRouter />
    </Content>
  </Router>
);
