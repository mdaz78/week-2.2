const express = require("express");
const bodyParser = require("body-parser");

const port = 4000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("post request received");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
