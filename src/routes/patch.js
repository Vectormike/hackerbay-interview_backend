import { Router } from "express";
const router = Router();

import PatchController from "../controller/jsonpatch";
import AuthMiddleware from "../middleware/auth";

/**
 * @route POST api/jsonpatcher
 * @desc Patch a JSON document
 * @access Private
 */

router.patch(
  "/jsonpatcher",
  AuthMiddleware.verifyToken,
  PatchController.patchDoc
);

export default router;
