export const enum Color {
  Blue = "#004688",
  Pink = "#FF1654",
  DarkPink = "#950028",
  Orange = "#F4D35E",
  Egg = "#EBEBD3",
}

if (process.env.NODE_ENV === "development") {
  // tslint:disable-next-line:no-var-requires
  const { injectGlobal } = require("styled-components");
  // tslint:disable-next-line:no-unused-expression
  injectGlobal`
    :root {
      --pink: ${Color.Pink};
      --blue: ${Color.Blue};
    }
  `;
}
