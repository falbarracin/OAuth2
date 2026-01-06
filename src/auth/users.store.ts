export interface User {
  name: string;
  email: string;
  role: "user" | "admin";
}

export const users: User[] = [];