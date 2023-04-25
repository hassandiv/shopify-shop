const apiVersion = "2023-04";
const apiBaseUrl = (shop) => `https://${shop}/admin/api/${apiVersion}`;

// Products API
const products = (shop) => `${apiBaseUrl(shop)}/products.json`;

module.exports = { products };
