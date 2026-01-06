import { users, User } from "./users.store";
import { generateToken } from "../utils/jwt.util";

export function handleOAuthLogin(profile: {
  name: string;
  email: string;
}) {
  let user = users.find(u => u.email === profile.email);

  if (!user) {
    user = {
      name: profile.name,
      email: profile.email,
      role: "user",
    };

    users.push(user);
  }

  const token = generateToken(user);

  return token;
}