# Shopify Add Product Dashboard

> This project is a web application built with HTML, CSS, JavaScript, and Node.js that allow shopify admin to add products to ebeautystoree.myshopify.com Shopify store using the online form. The app is hosted on Heroku at https://beauty-shop.herokuapp.com/ and the source code is available on GitHub at https://github.com/hassandiv/shopify-shop.

> Live demo [_here_](https://beauty-shop.herokuapp.com).
> Shopify store [_here_](https://ebeautystoree.myshopify.com)

## Table of Contents

- [General Info](#general-information)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Usage](#usage)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#ccknowledgements)

## General Information

- The purpose of this project is to provide an easy way for Shopify store owner ebeautystoree.myshopify.com to add products to their store without having to go through the Shopify admin interface. The app provides a simple web form that allow shopify admin to enter product information, and to add products to the store.

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- Shopify API

## Features

- Allows users to enter product information, such as title, description, price, and image, through a web form
- Sends a POST request to the Shopify API to add the product to Shopify store https://ebeautystoree.myshopify.com/
- Displays success or error messages to the user based on the API response

## Usage

- To add a product to the Shopify store https://ebeautystoree.myshopify.com/ using this app, follow these steps:

1. Navigate to https://beauty-shop.herokuapp.com/.
2. Fill out the form with the product information.
3. Click the "Add Product" button.
4. If the product is added successfully, you will see a success message. If there is an error, you will see an error message.
5. Login to https://accounts.shopify.com/store-login
6. Select ebeautystoree.myshopify.com.
7. Go to https://ebeautystoree.myshopify.com/admin/products to see the new product added.

## Local Installation

To run this project locally, follow these steps:

1. Clone the repository: git clone https://github.com/hassandiv/shopify-shop.git
2. Install the dependencies: npm install
3. Set up your environment variables by creating a .env file in the project root directory with the following values:

```env
TOKEN="add store token"
```

```env
SHOP="add shop name"
```

4. Start the server: npm start
5. Access the web application at http://localhost:9000

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request.

## License

Copyright (c) [2023] [Elhassan Abdelhafez]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.

## Acknowledgements

This project was inspired by the Shopify API documentation and the following resources were used in its development:

- Shopify API documentation
- Heroku Server

## Contact

Created by https://github.com/hassandiv - feel free to contact me!
