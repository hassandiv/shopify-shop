require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", async (req, res) => res.send("shopify embeded shop"));

app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}`)
);
