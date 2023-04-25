require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const { addProduct } = require("./shopifyProducts");
const PORT = process.env.PORT || 9000;

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());

app.get("/", async (req, res) => res.send("Shopify App"));

app.post("/api/shopify/products", async (req, res) =>
  res.json(await addProduct(req.body, process.env.TOKEN))
);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
