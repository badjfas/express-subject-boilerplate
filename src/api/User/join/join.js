import { User } from "../../../sequelize";

export default {
    Mutation: {
        join: async (_, args, {}) => {
            const { studentId } = args;
            const hashPassword = crypto.createHash("sha512").update(args.password).digest("base64");
            try {
                const emailCheck = await User.findOne({ where: { studentId: studentId } });

                if (emailCheck === null) {
                    return await User.create({
                        ...args,
                        password: hashPassword,
                        departmentId: 103
                    });
                } else {
                    throw Error("회원가입 오류");
                }
            } catch {
                throw Error("회원가입 오류");
            }
        }
    }
};
