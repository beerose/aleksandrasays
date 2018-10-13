export const enum Color {
  BottomColor = "#cecece",
  TopColor = "#FF1654",
  Orange = "#F4D35E",
  Egg = "#EBEBD3",
  SemiTransparentBlack = "rgba(0,0,0,0.25)",
  NotSoTransparentBlack = "rgba(0,0,0,0.5)",
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
