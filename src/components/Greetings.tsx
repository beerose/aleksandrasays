import React from 'react';
import styled from 'styled-components';


const greetingText = 'I’m Aleksandra Sikora. Fullstack developer, based in Wrocław.';

const Container = styled.div`
  position: fixed;
  bottom: 15%;
  left: 10%;
  font-size: 65px;
  font-weight: 700;
  line-height: 1.4;
  color: #0008CE;
  max-width: 70%;
`;
  

const Greetings: React.SFC<{}> = () => (
  <Container>
    Hi!
    <br />
    {greetingText}
  </Container>
);
  
export default Greetings;
