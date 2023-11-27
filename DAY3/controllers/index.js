
const data = require("../db/nonPersistant.js");

exports.createStrings = (req, res) => {
  const { content } = req.body;

    //   if (typeof num !== "string" ) {
    //     return res.status(400).json({ err: "invalid data type" });
    //   }

  data.push(content);

  return res.status(201).send({ message : content });
};
