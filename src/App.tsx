import React, {StatelessComponent} from "react";
import {BrowserRouter as Router, Switch, Route, withRouter} from "react-router-dom";
import styled from "styled-components";
import {Spring} from "react-spring";

import img from "./assets/img/background.png";
import {MainPage, Contact, About} from "./components/";

// background-image: url(${img});
const Content = styled.div`
  background-color: #004688;
  width: 100%;
  height: 100%;
`;
//#4b68c1
//#3653ab

const PropsLogger = (props: any) => {
  console.log(props);
  return <div>{JSON.stringify(props, undefined, 2)}</div>;
};

export const App: StatelessComponent = () => (
  <Router>
    <Content>
      <Route>
        {({location}) => (
          <svg
            viewBox="0 0 1012.8 788.23"
            preserveAspectRatio="xMidYMid slice"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              pointerEvents: "none",
            }}>
            <Spring to={{text: location.pathname === "/" ? 0 : 100}}>
              {({text}) => (
                <>
                  <text x={50} y="50">
                    {text}
                  </text>
                  <path
                    fill="#ff4819"
                    d="M1309.23,788.23,303.17,0H1316Q1312.6,394.11,1309.23,788.23Z"
                  />
                  <path fill="#fb578c" d="M0,788.23V0H709.63Z" />
                </>
              )}
            </Spring>
          </svg>
        )}
      </Route>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/contact" component={Contact as any} />
        <Route path="/about" component={About as any} />
      </Switch>
    </Content>
  </Router>
);
