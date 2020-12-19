import { User } from "../../../sequelize";
import { generateToken } from "../../../utils";
import crypto from "crypto";
export default {
    Mutation: {
        login: async (_, args) => {
            const hashPassword = crypto.createHash("sha512").update(args.password).digest("base64");
            try {
                const userData = await User.findOne({
                    where: { email: args.email },
                    attributes: ["firstName", "lastName", "avatar", "id", "email", "password"],
                    raw: true
                });
                if (userData.password === hashPassword) {
                    return generateToken({
                        id: userData.id,
                        fullName: userData.firstName + userData.lastName
                    });
                }
            } catch (e) {
                console.log(e);
                throw Error("로그인 에러");
            }
        }
    }
};
