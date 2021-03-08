// require("dotenv").config();

module.exports = {
  env: {
    domain: process.env.domain,
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret,
    redirectUri: process.env.redirectUri,
    postLogoutRedirectUri: process.env.postLogoutRedirectUri,
    cookieSecret: process.env.cookieSecret,
    githubToken: process.env.githubToken,
    gistId: process.env.gistId,
  },
  timeout: 1000000,
};
