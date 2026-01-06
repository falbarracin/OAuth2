import "express";

declare global {
  namespace Express {
    interface User {
      name: string;
      email: string;
      role: "user" | "admin";
    }
  }
}