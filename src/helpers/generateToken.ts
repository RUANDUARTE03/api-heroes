import jwt from "jsonwebtoken";
import moment from "moment";
const authConfig = require("../config/auth");

function generateToken(params = {}) {
  return {
    token: jwt.sign(params, authConfig.secret, {
      expiresIn: authConfig.expires,
    }),
    expiresIn: moment().add(authConfig.expires, "seconds").utc(),
  };
}

export default generateToken;
