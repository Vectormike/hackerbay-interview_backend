import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const secret = process.env.SECRET;

class AuthMiddleware {
  static async verifyToken(token) {
    let token =
      req.body.token || req.query.token || req.headers["x-access-token"];

    try {
      jwt.verify(token, secret, { expiresIn: "24hr" }, (error, decoded) => {
        if (error) {
          res.status(401).json({ msg: "Token is not valid" });
        } else {
          req.user = decoded.user;
          next();
        }
      });
    } catch (err) {
      res.status(500).json({ msg: "Server Error" });
    }
  }

  static async generateToken(newToken) {
    try {
      jwt.sign(newToken, secret, { expiresIn: "24hr" }, (error, token) => {
        if (error) {
          throw error;
        }
        return token;
      });
    } catch (error) {
      res.status(500).json({ msg: "Server Error" });
    }
  }
}

export default AuthMiddleware;
