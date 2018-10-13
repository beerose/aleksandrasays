import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { LinkProps } from "./HamburgerStripe";

export const Link = ({ external, linkTo, ...rest }: LinkProps) =>
  external ? (
    <a href={linkTo} target="__blank" {...rest} />
  ) : (
    <RouterLink to={linkTo} {...rest} />
  );
