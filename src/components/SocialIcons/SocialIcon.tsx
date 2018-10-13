import React from "react";

type Props = {
  linkTo: string;
};

export class SocialIcon extends React.Component<Props, {}> {
  public render() {
    const { linkTo, children } = this.props;
    return (
      <a
        href={linkTo}
        target={"_blank"}
        style={{
          margin: "8px",
          textDecoration: "none",
        }}
      >
        {children}
      </a>
    );
  }
}
