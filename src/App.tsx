import React from "react";
import {
  BrowserRouter as Router,
  RouteComponentProps,
  withRouter,
} from "react-router-dom";
import styled from "styled-components";

import { Color } from "./Color";
import {
  Greeting,
  Header,
  AnimatedPath,
  About,
  Contact,
  SocialIcons,
} from "./components/";

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

const pathnameToSection = ({ pathname }: { pathname: string }) => {
  switch (pathname) {
    case "/":
      return AppSection.Main;
    case "/about":
      return AppSection.About;
    case "/contact":
      return AppSection.Contact;
    default:
      return AppSection.None;
  }
};

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
    this.setState({
      currentSection: pathnameToSection(this.props.location),
    });
  }

  public componentWillReceiveProps(nextProps: MainProps) {
    if (nextProps.location.pathname === this.props.location.pathname) {
      return;
    }
    this.setState({
      currentSection: pathnameToSection(nextProps.location),
    });
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
