const express = require("express");
const router = express.Router();

// Load Game model
const HighScores = require("../../models/HighScores");

router.post("/", (req, res) => {
  console.log(req.body);
  HighScores.create(req.body).then(HighScores => {
    res.json(HighScores);
  });
});

router.get("/",(req, res) => {

  HighScores.find({}).then(HighScores => {
    res.json({ HighScores });
  });
});

module.exports = router;
