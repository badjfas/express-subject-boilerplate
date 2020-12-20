import { User } from "../../../sequelize";
import { generateToken } from "../../../utils";
import crypto from "crypto";
export default {
    Mutation: {
        login: async (_, args) => {
            const hashPassword = crypto.createHash("sha512").update(args.password).digest("base64");
            try {
                const userData = await User.findOne({
                    where: { studentId: args.studentId },
                    attributes: ["firstName", "lastName", "avatar", "id", "studentId", "password"],
                    raw: true
                });
                if (userData.password === hashPassword) {
                    return generateToken({
                        id: userData.id,
                        fullName: userData.firstName + userData.lastName
                    });
                } else {
                    throw Error("로그인 오류");
                }
            } catch (e) {
                throw Error("로그인 에러");
            }
        }
    }
};
