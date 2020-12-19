export const isAuth = req => {
    if (!req.user) {
        throw Error("허용되지 않은 접근입니다.");
    }
    return;
};
