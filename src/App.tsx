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

const Content = styled.div`
  background-color: ${Color.BottomColor};
  width: 100%;
  height: 100%;
`;

const TOP_COLOR_INACTIVE = "M0,0 L0.7,0 L0,1.3 Z";
const TOP_COLOR_ACTIVE = "M0,0 L2,0 L0,1.2 Z";
const TOP_COLOR_HIDEN = "M0,0, L-0.1,-0.1 L0,2 Z";

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
        <svg
          viewBox="0 0 1 1"
          preserveAspectRatio="xMidYMid slice"
          style={{
            height: "100%",
            pointerEvents: "none",
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        >
          <Spring
            config={{
              friction: 30,
              tension: 100,
            }}
            to={{
              TopColorPath:
                pathname === "/"
                  ? TOP_COLOR_INACTIVE
                  : pathname === "/about"
                    ? TOP_COLOR_ACTIVE
                    : TOP_COLOR_HIDEN,
            }}
            delay={currentSection === AppSection.Main ? 400 : 0}
          >
            {({ TopColorPath }) => (
              <path fill={Color.TopColor} d={TopColorPath} />
            )}
          </Spring>
        </svg>
        <About aboutVisible={currentSection === AppSection.About} />
        <SocialIconsContainer>
          <SocialIcons />
        </SocialIconsContainer>
        <Greeting visible={currentSection === AppSection.Main} />
        <Header showArrow={pathname !== "/"} />
        <Contact visible={currentSection === AppSection.Contact} />
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
