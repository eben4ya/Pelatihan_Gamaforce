const express = require("express");

const router = express.Router();

const { createStrings } = require("../controllers/index.js");

const data = require("../db/nonPersistant.js");

router.post("/", createStrings);

router.get("/", (req, res) => {
  return res.status(200).send(data);
});

// params
router.get("/:id", (req, res) => {
  const { id } = req.params;
  //   console.log(id);
  if (isNaN(parseInt(id)) || parseInt(id) > data.length || parseInt(id) < 1) {
    return res.status(400).send({ err: "invalid id" });
  }
//   return res.status(200).send(data[parseInt(id) - 1]);
  return res.status(200).send(data[parseInt(id) - 1].misi);
});

module.exports = router;
