import AuthMiddleware from "../middleware/auth";
const { generateToken } = AuthMiddleware;

/**
 * Authentication
 */

class AuthController {
  static async login(req, res) {
    let details = {
      username: req.body.username,
      password: req.body.password
    };

    const { username } = details;
    const response = await generateToken(details);
    if (response) {
      res.json({
        success: true,
        user: username
      });
    }
    res.json({
      success: false
    });
  }
}

export default AuthController;
