import jwt from "jsonwebtoken";
import { jwtConfig } from "../config/jwt.config";
import { User } from "../auth/users.store";

export function generateToken(user: User): string {
  return jwt.sign(
    {
      name: user.name,
      email: user.email,
      role: user.role,
    },
    jwtConfig.secret,
    {
      expiresIn: jwtConfig.expiresIn,
    }
  );
}