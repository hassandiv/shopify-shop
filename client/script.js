const imagesInput = document.getElementById("images");
const loader = document.getElementById("add-product");
const selectedImagesList = document.getElementById("selected-images");
const images = [];
const addProductForm = document.querySelector("form");
const error = document.getElementById("error");
const success = document.getElementById("success");

imagesInput.addEventListener("change", (event) => {
  for (const file of event.target.files) {
    const listItem = document.createElement("li");
    listItem.textContent = file.name;
    selectedImagesList.appendChild(listItem);
  }

  const { files } = imagesInput;
  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const base64String = event.target.result.split(",")[1];
      images.push({ attachment: base64String });
    };
    reader.readAsDataURL(files[i]);
  }
});

addProductForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    loader.innerText = "loading ...";
    const endpoint = `${window.location.origin}/api/shopify/products`;
    const response = await fetch(endpoint, {
      method: "post",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        product: {
          title: addProductForm.title.value,
          body_html: addProductForm.description.value,
          tags: addProductForm.tags.value,
          images: images,
          variants: [
            {
              price: addProductForm.price.value,
              sku: addProductForm.sku.value,
            },
          ],
        },
      }),
    });

    if (response.ok) {
      loader.innerText = "Add Product";
      error.innerText = "";
      success.style.display = "block";
      success.innerText = "Product added successfully!";
      event.target.reset();
      selectedImagesList.innerText = "";
    } else {
      loader.innerText = "Add Product";
      success.innerText = "";
      error.style.display = "block";
      error.innerText = `Error: product was not added to shopify due to technical error - ${response.status}`;
    }
  } catch (error) {
    throw new Error(error.message);
  }
});
