const axios = require("axios");
const { products } = require("./shopifyConstant");

const addProduct = async (payload, token) => {
  try {
    const { data } = await axios({
      url: products(process.env.SHOP),
      method: "post",
      data: payload,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "X-Shopify-Access-Token": token,
      },
    });

    return data;
  } catch (err) {
    console.log("Error create product", err.message);
  }
};

module.exports = { addProduct };
