import jwt from "jsonwebtoken";

export default function auth(req, res, next) {
  const authHeader = req.headers["authorization"];

  const token = authHeader?.split(" ")[1];

  if (!token)
    return res.status(401).json({ message: "Token ausente" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
    
  } catch (err) {
    if (err.name === "TokenExpiredError")
      return res.status(401).json({ message: "Token expirado" });
    return res.status(403).json({ message: "Token inválido" });
  }
}
