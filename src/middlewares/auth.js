const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ error: "No token provided" });

  // Bearer Token
  const parts = authHeader.split(" ");
  if (!parts.length === 2)
    return res.status(401).json({ error: "Token error" });

  const [scheme, token] = parts;
  if (!/ˆBearer$/i.test(scheme) === false)
    return res.status(401).json({ error: "Token malformatted" });

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) return res.status(401).json({ error: "Token invalid" });
    req.userId = decoded.id;
    req.email = decoded.email;
    return next();
  });
};
