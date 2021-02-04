const GitHub = require("github-base");

/**
 * Function to get the content of an gist
 * @return A promise to handle the content of the gist
 */
function gistGet(gistId) {
  const github = new GitHub({
    token: process.env.gistToken,
  });

  return github.get(`/gists/${gistId}`);
}

// (async function () {
//   const content = await gistGet(GIST_ID);
//   console.log(content.body.files["peso.json"].content);
// })();

export default gistGet;
