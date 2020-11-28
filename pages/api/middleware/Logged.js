import callbackHandler from "@auth0/nextjs-auth0/dist/handlers/callback";
import auth0 from "utils/auth";

const Logged = (handler) => async (req, res) => {
  const { user } = await auth0.getSession(req);
  console.log({ user, userSub: user.sub });
  return handler(req, res);
};

export default Logged;
