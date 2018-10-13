const { execSync } = require("child_process");
const ghpages = require("gh-pages");

execSync("cp CNAME dist/");

ghpages.publish("dist", {
  branch: "master",
  repo: "git@github.com:blackdahila/blackdahila.github.io.git",
});
