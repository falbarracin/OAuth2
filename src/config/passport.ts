import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { users } from "../auth/users.store";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: process.env.GOOGLE_CALLBACK_URL!,
    },
    (accessToken, refreshToken, profile, done) => {
      const email = profile.emails?.[0]?.value;
      const name = profile.displayName;

      if (!email) {
        return done(new Error("Email not provided by Google"));
      }

      let user = users.find(u => u.email === email);

      if (!user) {
        user = {
          name,
          email,
          role: "user",
        };
        users.push(user);
      }

      return done(null, user);
    }
  )
);

export default passport;