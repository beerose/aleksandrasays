import React from "react";

import { IconGithub, IconInstagram, IconLinkedin, IconTwitter } from "../Icons";
import { SocialIcon } from "./SocialIcon";
import { Color } from "../../Color";

export const SocialIcons = () => (
  <>
    <SocialIcon linkTo={"https://www.github.com/blackdahila"}>
      <IconGithub color={Color.PrimaryColor} width="33px" />
    </SocialIcon>
    <SocialIcon linkTo={"https://www.twitter.com/aleksandrasays"}>
      <IconTwitter color={Color.PrimaryColor} width="37px" />
    </SocialIcon>
    <SocialIcon linkTo={"https://www.instagram.com/poczekajnamnie"}>
      <IconInstagram color={Color.PrimaryColor} width="33px" />
    </SocialIcon>
    <SocialIcon
      linkTo={"https://www.linkedin.com/in/aleksandra-sikora-b54699132/"}
    >
      <IconLinkedin color={Color.PrimaryColor} width="31px" />
    </SocialIcon>
  </>
);
