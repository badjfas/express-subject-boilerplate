import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { User } from "./sequelize";

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // 헤더에서 토큰을 가져옴
    secretOrKey: process.env.JWT_SECRET
};

const verifyUser = async (payload, done) => {
    //context의 isAuth에서 payload가 오면
    const { user } = payload;
    try {
        if (user !== null) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (e) {
        return done(e, false);
    }
};

export const authenticateJwt = (req, res, next) => {
    return passport.authenticate("jwt", { session: false }, (error, user) => {
        if (user) {
            req.user = user;
        }
        next();
    })(req, res, next);
};

passport.use(new Strategy(jwtOptions, verifyUser));
passport.initialize();
