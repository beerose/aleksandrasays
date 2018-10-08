import React from 'react';
import styled from 'styled-components';
import Typed from 'react-typed';

import { SocialIconsPanel } from './SocialIcons';
import { Header } from './Header';

const greetingText = 'I’m Aleksandra Sikora. Fullstack developer, based in Wrocław.';

const Container = styled.div`
  position: fixed;
  bottom: 25%;
  left: 10%;
  font-size: 65px;
  font-weight: 700;
  line-height: 1.4;
  color: #3653ab;
  max-width: 70%;
`;

const SocialIconsContainer = styled.div`
  position: fixed;
  bottom: 5%;
  right: 5%;
`
  

const MainPage: React.SFC<{}> = () => (
  <div style={{ position: 'relative' }}>
    <Header showArrow={false}/>
    <Container>
      Hi!
      <br />
      {greetingText}
    </Container>
    <SocialIconsContainer>
      <SocialIconsPanel />
    </SocialIconsContainer>
  </div>
);
  
export default MainPage;
