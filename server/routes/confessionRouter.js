const express = require("express");
const router = express.Router();

const Model = require("../app/models/confessionModel");
const isUser = require("../app/middlewares/isUserMiddleware");

router.get("/", isUser, (req, res) => {
  Model.find()
    .then((result) => {
      res.status(200).json({
        success: true,
        message: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: error,
      });
    });
});

router.post("/", (req, res) => {
  var instance = new Model({
    content: req.body.content,
    category: req.body.category,
  });
  instance
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: error,
      });
    });
});

router.delete("/", isUser, (req, res) => {
  Model.deleteMany({
    _id: { $in: req.body.id },
  })
    .then((result) => {
      res.status(200).json({
        success: true,
        message: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: error,
      });
    });
});

module.exports = router;
