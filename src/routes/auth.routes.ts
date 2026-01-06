import { Router } from "express";
import passport from "../config/passport";
import { googleCallback } from "../auth/auth.controller";

const router = Router();

/**
 * redirección a Google
 */
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

/**
 * callback OAuth2
 */
router.get(
  "/external/callback",
  passport.authenticate("google", { session: false }),
  googleCallback
);

export default router;