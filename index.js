require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const { addProduct } = require("./shopifyProducts");
const PORT = process.env.PORT || 9000;

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(express.static("client"));

app.post("/api/shopify/products", async (req, res) => {
  try {
    res.json(await addProduct(req.body));
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
