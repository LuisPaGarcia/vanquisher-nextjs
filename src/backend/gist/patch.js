const GitHub = require("github-base");

/**
 *
 * @param {string} gistId value of the gist to update
 * @param {string} filename name of the file inside of the gist to patch
 * @param {object} content value to save in the gist
 */
function gistPatch(gistId, filename, content) {
  const github = new GitHub({
    token: process.env.gistToken,
  });
  const options = { files: { [filename]: { content } } };
  return github.patch(`/gists/${gistId}`, options);
}

// (async function (content) {
//   try {
//     const response = await gistPatch(
//       process.env.gistPesoId,
//       "peso.json",
//       JSON.stringify(content)
//     );
//     console.log(response.body);
//   } catch (error) {
//     console.log(error);
//   }
// })();

export default gistPatch;
