const express = require("express");

const app = express();

const PORT = 3000;

// middleware
app.use(express.json()); // parsing incoming request with JSON payloads

app.get("/", (req, res) => {
  //   res.send("Hello World");
  return res.status(200).send({ message: "Halo dari server" });
});

app.get("/mission1", (req, res) => {
  //   res.send("Hello World");
  return res.status(200).send({ nama_misi: "Misi 1" });
});

const missionRoutes = require("./routes/missionRoutes.js");

app.use("/api/mission", missionRoutes);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log(`server is running on port ${PORT}`);
});
