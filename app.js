const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const url = process.env.APP_URL;
const port = process.env.APP_PORT || 3030;

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Skyshi Digital Indonesia Backend Node JS");
});

app.listen(port, () => console.log(`Server is running on ${url}:${port}`));
