import { User } from "../../../sequelize";

export default {
    Query: {
        me: async (_, args, { req, isAuth, user }) => {
            console.log(user);
            return {
                id: 1,
                isMe: true,
                isFollow: false
            };
        }
    }
};
