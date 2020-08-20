const express = require("express");
const router = express.Router();

const Model = require("../app/models/categoryModel");
const isUser = require("../app/middlewares/isUserMiddleware");

router.get("/", (req, res) => {
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

router.post("/", isUser, (req, res) => {
  var instance = new Model({ title: req.body.title });
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

router.delete("/:id", isUser, (req, res) => {
  Model.findOneAndDelete({
    _id: req.params.id,
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
