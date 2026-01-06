import { Request, Response } from "express";
import { generateToken } from "../utils/jwt.util";

export function googleCallback(req: Request, res: Response) {
  if (!req.user) {
    return res.status(401).json({ message: "Authentication failed" });
  }

  const token = generateToken(req.user);

  res.json({ token });
}