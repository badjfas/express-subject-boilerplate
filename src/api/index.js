const router = require("express").Router();

const todo = require("./todo");
const todoGroup = require("./todoGroup");

router.use("/todo", todo);
router.use("/group", todoGroup);

module.exports = router;
