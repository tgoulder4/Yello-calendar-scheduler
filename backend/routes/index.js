const router = require("express").Router;
const ctrlIndex = require("../controllers/ctrlIndex");
//import index controller
router.get("/", ctrlIndex.get);
router.post("/", ctrlIndex.post);
module.exports = router;
