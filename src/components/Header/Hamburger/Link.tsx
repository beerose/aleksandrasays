import React from "react";
import { Link as RouterLink } from "react-router-dom";
export type LinkProps = {
  linkTo: string;
  style: React.CSSProperties;
  external?: boolean;
  children?: React.ReactNode;
};
export const Link = ({ external, linkTo, ...rest }: LinkProps) =>
  external ? (
    <a href={linkTo} target="__blank" {...rest} />
  ) : (
    <RouterLink to={linkTo} {...rest} />
  );
