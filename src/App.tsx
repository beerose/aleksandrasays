import React from "react";
import {
  BrowserRouter as Router,
  RouteComponentProps,
  withRouter,
} from "react-router-dom";
import { Spring } from "react-spring";
import styled from "styled-components";

import { Color } from "./Color";
import { About, MainPage } from "./components/";
import { Header } from "./components/Header";

// background-image: url(${img});
const Content = styled.div`
  background-color: #004688;
  width: 100%;
  height: 100%;
`;
// #4b68c1
// #3653ab

// const ORANGE_INACTIVE = "M1000,10000 L400,-100 L0,380 Z";
const PINK_INACTIVE = "M0,0 L1,0 L0,1 Z";
const PINK_ACTIVE = "M0,0 L2,0 L0,2 Z";

const initialState = {
  greetingsVisible: false,
  mountAbout: false,
};

type MainProps = RouteComponentProps<any>;
type State = typeof initialState;
export class Main extends React.Component<MainProps, State> {
  public state = initialState;

  public componentDidMount() {
    switch (this.props.location.pathname) {
      case "/":
        this.setState({
          greetingsVisible: true,
          mountAbout: false,
        });
        return;
      case "/about":
        this.setState({
          greetingsVisible: false,
          mountAbout: true,
        });
        return;
    }
  }

  public componentWillReceiveProps(nextProps: MainProps) {
    if (nextProps.location.pathname === this.props.location.pathname) {
      return;
    }
    switch (nextProps.location.pathname) {
      case "/":
        this.setState({
          greetingsVisible: true,
          mountAbout: false,
        });
        return;
      case "/about":
        this.setState({
          greetingsVisible: false,
          mountAbout: true,
        });
        return;
    }
  }

  public render() {
    const {
      location: { pathname },
    } = this.props;

    const { greetingsVisible, mountAbout } = this.state;

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
              pinkPath: pathname === "/about" ? PINK_ACTIVE : PINK_INACTIVE,
            }}
            delay={greetingsVisible ? 500 : 0}
          >
            {({ pinkPath }) => (
              <clipPath id="pink-clip-path" clipPathUnits="objectBoundingBox">
                <path fill={Color.Pink} d={pinkPath} />
              </clipPath>
            )}
          </Spring>
        </svg>
        <MainPage greetingsVisible={this.state.greetingsVisible} />
        <About greetingsVisible={greetingsVisible} mountAbout={mountAbout} />
        {/* <Contact /> */}
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
