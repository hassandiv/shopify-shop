const axios = require("axios");
const { products } = require("./shopifyConstant");

const token = process.env.TOKEN;

const addProduct = async (payload) => {
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
    return `Error create product ${err.message}`;
  }
};

module.exports = { addProduct };
