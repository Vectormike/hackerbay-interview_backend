import { Router } from "express";
const router = Router();

// Middleware
import AuthController from "../controller/auth";

/**
 * @route POST api/auth/login
 * @desc Auth a user
 * @access Public
 */
router.post("/login", AuthController.login);

export default router;
