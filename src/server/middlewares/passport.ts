import passport from "passport";
import PassportLocal from "passport-local";
import db from "../db";
import bcrypt from "bcrypt";
import type { Express } from "express";

export function configurePassport(app: Express) {
  passport.use(
    new PassportLocal.Strategy(
      {
        // telling the strategy that the default username field will be na email field
        usernameField: "email",
        session: false,
      },
      async (email, password, done) => {
        try {
          //check if the email exist
          const [foundUser] = await db.users.find("email", email);
          // if yes and the password match, done(good)
          if (
            foundUser &&
            (await bcrypt.compare(password, foundUser.password))
          ) {
            delete foundUser.password;
            return done(null, foundUser);
          }
          // if not, done(bad)
          return done(null, false, { message: "invalid credentials" });
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  app.use(passport.initialize());
}
