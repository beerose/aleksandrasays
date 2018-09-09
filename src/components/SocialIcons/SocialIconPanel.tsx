import React from 'react';
import styled from 'styled-components';

import { SocialIcon } from './SocialIcon';
import { twitter, instagram, github, linkedin } from '../../assets/svg';

const SocialIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
`

class SocialIconsPanel extends React.Component {
  render() {
    return (
      <SocialIconsContainer>
        <SocialIcon linkTo={'https://www.github.com/blackdahila'} imgSrc={github}/>
        <SocialIcon linkTo={'https://www.linkedin.com/in/aleksandra-sikora-b54699132/'} imgSrc={linkedin}/>
        <SocialIcon linkTo={'https://www.twitter.com/aleksandrasays'} imgSrc={twitter}/>
        <SocialIcon linkTo={'https://www.instagram.com/poczekajnamnie'} imgSrc={instagram}/>
      </SocialIconsContainer>
    );
  }
}

export default SocialIconsPanel;
