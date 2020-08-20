const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.post("/", (req, res) => {
  bcrypt.genSalt(10, (error, salt) => {
    if (error) {
      return res.status(500).json({
        success: false,
        message: error,
      });
    }

    bcrypt.hash(req.body.message, salt, (error, hash) => {
      if (error) {
        return res.status(500).json({
          success: false,
          message: error,
        });
      }

      bcrypt.compare(process.env.SECRET_MESSAGE, hash, (error, result) => {
        if (result) {
          var token = jwt.sign(
            { identifier: "not-admin" },
            process.env.SECRET_KEY,
            { expiresIn: "365d" }
          );

          return res.status(200).json({
            success: true,
            message: token,
          });
        } else {
          return res.status(500).json({
            success: false,
            message: "Login fail",
          });
        }
      });
    });
  });
});

module.exports = router;
