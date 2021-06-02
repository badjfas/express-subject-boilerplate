const router = require("express").Router();
const service = require("./service").default;

router.get("/", service.read);
router.post("/create", service.create);
router.put("/update", service.complete);

module.exports = router;
