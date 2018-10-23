import React from "react";
import { Link as RouterLink } from "react-router-dom";
export type LinkProps = {
  linkTo: string;
  external?: boolean;
  children?: React.ReactNode;
  enabled?: boolean;
};
export const Link = ({ external, linkTo, enabled, ...children }: LinkProps) =>
  external ? (
    <a
      href={linkTo}
      target="__blank"
      style={{
        textDecoration: "none",
        pointerEvents: enabled ? "initial" : "none",
      }}
      {...children}
    />
  ) : (
    <RouterLink
      to={linkTo}
      style={{
        textDecoration: "none",
        pointerEvents: enabled ? "initial" : "none",
      }}
      {...children}
    />
  );
