const router = require("express").Router();
const service = require("./service").default;

router.get("/", service.read);

router.post("/bulk", service.bulkCreate);

module.exports = router;
