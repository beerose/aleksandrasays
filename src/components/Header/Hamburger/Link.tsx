import React from "react";
import { Link as RouterLink } from "react-router-dom";
type LinkProps = {
  linkTo: string;
  style?: React.CSSProperties;
  external?: boolean;
  children?: React.ReactNode;
  disabled?: boolean;
};
export const Link = ({
  external,
  linkTo,
  disabled,
  style: styleProp,
  ...rest
}: LinkProps) => {
  const style: React.CSSProperties = {
    ...styleProp,
    pointerEvents: disabled ? "initial" : "none",
  };

  return external ? (
    <a href={linkTo} target="__blank" style={style} {...rest} />
  ) : (
    <RouterLink to={linkTo} style={style} {...rest} />
  );
};
