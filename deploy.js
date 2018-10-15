const { execSync } = require("child_process");
const ghpages = require("gh-pages");

execSync("cp CNAME dist/");
execSync("cp dist/index.html dist/404.html");

ghpages.publish("dist", {
  branch: "master",
  repo: "git@github.com:blackdahila/blackdahila.github.io.git",
});
