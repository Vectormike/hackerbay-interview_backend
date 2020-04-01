import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secret = process.env.SECRET;

class AuthMiddleware {
  static async verifyToken(req, res, next) {
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"];

    try {
      jwt.verify(token, secret, { expiresIn: "24hr" }, (error, decoded) => {
        // eslint-disable-next-line no-undef
        if (error) throw error;
        else {
          req.user = decoded.user;
          next();
        }
      });
    } catch (err) {
      res.status(403).json({ msg: "You are not logged in" });
    }
  }

  static async generateToken(req, res, next) {
    try {
      jwt.sign(data, secret, { expiresIn: "24hr" }, (error, token) => {
        if (error) {
          throw error;
        }
        return token;
      });
      next();
    } catch (error) {
      res.status(500).json({ msg: "Server Error" });
    }
  }
}

export default AuthMiddleware;
