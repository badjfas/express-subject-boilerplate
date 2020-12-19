import { User } from "../../../sequelize";

export default {
    Query: {
        me: async (_, args, { req, isAuth }) => {
            const { user } = req;
            isAuth(req);
            return {
                id: 1,
                isMe: true,
                isFollow: false
            };
        }
    }
};
