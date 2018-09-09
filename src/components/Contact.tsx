import React from 'react';
import styled from 'styled-components';

import { SocialIconsPanel } from './SocialIcons';
import { Header } from './Header';

const email = 'hello@aleksandrasays.com';

const Container = styled.div`
  position: fixed;
  bottom: 35%;
  font-size: 3em;
  font-weight: 700;
  line-height: 1.4;
  color: #0008CE;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Contact: React.SFC<{}> = () => (
  <>
    <Header />
    <Container>
      {email}
    <SocialIconsPanel />
    </Container>
  </>
);
  
export default Contact;
