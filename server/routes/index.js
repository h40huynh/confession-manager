const express = require("express");
const router = express.Router();

router.use("/confession", require("./confessionRouter"));
router.use("/category", require("./categoryRouter"));
router.use("/authentication", require("./userRouter"));

module.exports = router;
