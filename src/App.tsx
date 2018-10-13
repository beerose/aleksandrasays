import React from "react";
import {
  BrowserRouter as Router,
  RouteComponentProps,
  withRouter,
} from "react-router-dom";
import { Spring } from "react-spring";
import styled from "styled-components";

import { lighten } from "polished";
import { Color } from "./Color";
import { About, Contact, MainPage } from "./components/";
import { Header } from "./components/Header/Header";

// background-image: url(${img});
const Content = styled.div`
  background-color: ${lighten(0.1, Color.BottomColor)};
  width: 100%;
  height: 100%;
`;
// #4b68c1
// #002c55

// const ORANGE_INACTIVE = "M1000,10000 L400,-100 L0,380 Z";
const TOP_COLOR_INACTIVE = "M0,0 L0.7,0 L0,1.3 Z";
const TOP_COLOR_ACTIVE = "M0,0 L1.7,0 L0,1.6 Z";
const TOP_COLOR_HIDEN = "M0,0, L-0.1,-0.1 L0,2 Z";

const initialState = {
  aboutVisible: false,
  contactVisible: false,
  greetingsVisible: false,
};

type MainProps = RouteComponentProps<any>;
type State = typeof initialState;
export class Main extends React.Component<MainProps, State> {
  public state = initialState;

  public componentDidMount() {
    switch (this.props.location.pathname) {
      case "/":
        this.setState({
          aboutVisible: false,
          contactVisible: false,
          greetingsVisible: true,
        });
        return;
      case "/about":
        this.setState({
          aboutVisible: true,
          contactVisible: false,
          greetingsVisible: false,
        });
        return;
      case "/contact":
        this.setState({
          aboutVisible: false,
          contactVisible: true,
          greetingsVisible: false,
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
          aboutVisible: false,
          contactVisible: false,
          greetingsVisible: true,
        });
        return;
      case "/about":
        this.setState({
          aboutVisible: true,
          contactVisible: false,
          greetingsVisible: false,
        });
        return;
      case "/contact":
        this.setState({
          aboutVisible: false,
          contactVisible: true,
          greetingsVisible: false,
        });
    }
  }

  public render() {
    const {
      location: { pathname },
    } = this.props;

    const { greetingsVisible, aboutVisible, contactVisible } = this.state;

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
            delay={greetingsVisible ? 400 : 0}
          >
            {({ TopColorPath }) => (
              <clipPath
                id="top-color-clip-path"
                clipPathUnits="objectBoundingBox"
              >
                <path fill={Color.TopColor} d={TopColorPath} />
              </clipPath>
            )}
          </Spring>
        </svg>
        <MainPage greetingsVisible={greetingsVisible} />
        <About
          greetingsVisible={greetingsVisible}
          aboutVisible={aboutVisible}
        />
        <Header
          showArrow={pathname !== "/"}
          visible={true}
          color={pathname === "/about" ? Color.TopColor : Color.BottomColor}
        />
        <Contact visible={contactVisible} />
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
