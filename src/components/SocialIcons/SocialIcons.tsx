import React from "react";

import { IconGithub, IconInstagram, IconLinkedin, IconTwitter } from "../Icons";
import { SocialIcon } from "./SocialIcon";

type SocialIconsPanelProps = {
  color: string;
  delay?: number;
};
class SocialIcons extends React.Component<SocialIconsPanelProps> {
  public render() {
    return (
      <>
        <SocialIcon linkTo={"https://www.github.com/blackdahila"}>
          <IconGithub color={this.props.color} width="33px" />
        </SocialIcon>
        <SocialIcon linkTo={"https://www.twitter.com/aleksandrasays"}>
          <IconTwitter color={this.props.color} width="37px" />
        </SocialIcon>
        <SocialIcon linkTo={"https://www.instagram.com/poczekajnamnie"}>
          <IconInstagram color={this.props.color} width="33px" />
        </SocialIcon>
        <SocialIcon
          linkTo={"https://www.linkedin.com/in/aleksandra-sikora-b54699132/"}
        >
          <IconLinkedin color={this.props.color} width="31px" />
        </SocialIcon>
      </>
    );
  }
}

export default SocialIcons;
