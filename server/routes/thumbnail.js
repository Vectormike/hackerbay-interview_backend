import { Router } from "express";
const router = Router();

// Auth Middleware
import AuthMiddleware from "../middleware/auth";

// Create Thumbnail Controller
import CreateThumbnail from "../controller/thumbnail";

/**
 * @route POST api/createthumbnail
 * @desc Create a thumbnail
 * @access Private
 */

router.get(
  "/createthumbnail",
  AuthMiddleware.verifyToken,
  CreateThumbnail.create
);

export default router;
