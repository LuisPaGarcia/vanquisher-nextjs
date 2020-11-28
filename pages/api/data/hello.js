// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import auth0 from "utils/auth";

export default auth0.requireAuthentication(async (req, res) => {
  res.statusCode = 200;
  res.json({ name: "LuisPa Garcia" });
});
