export const enum Color {
  BottomColor = "#e8e8e8",
  TopColor = "#FF1654",
  PrimaryColor = "rgba(0,0,0,0.2)",
  LightPrimaryColor = "rgba(0,0,0,0.1)",
  DarkPrimaryColor = "rgba(0,0,0,0.4)",
  Transparent = "rgba(0,0,0,0)",
}

if (process.env.NODE_ENV === "development") {
  // tslint:disable-next-line:no-var-requires
  const { injectGlobal } = require("styled-components");
  // tslint:disable-next-line:no-unused-expression
  injectGlobal`
    :root {
      --TopColor: ${Color.TopColor};
      --BottomColor: ${Color.BottomColor};
    }
  `;
}
