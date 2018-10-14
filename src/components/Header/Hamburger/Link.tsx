import React from "react";
import { Link as RouterLink } from "react-router-dom";
export type LinkProps = {
  linkTo: string;
  external?: boolean;
  children?: React.ReactNode;
};
export const Link = ({ external, linkTo, ...children }: LinkProps) =>
  external ? (
    <a
      href={linkTo}
      target="__blank"
      style={{ textDecoration: "none" }}
      {...children}
    />
  ) : (
    <RouterLink to={linkTo} style={{ textDecoration: "none" }} {...children} />
  );
