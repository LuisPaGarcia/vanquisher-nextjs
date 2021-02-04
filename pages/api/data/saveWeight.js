import auth0 from "utils/auth";
export default auth0.requireAuthentication(async (req, res) => {
  if (req.method === "POST") {
    res.statusCode = 200;
    res.json({ name: "LuisPa Garcia" });
  } else {
    // Handle any other HTTP method
  }
});
