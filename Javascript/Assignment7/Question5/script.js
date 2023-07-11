const productApiUrl = "https://fakestoreapi.com/products";
const productListElement = document.getElementById("product-list");
const cartModal = document.getElementById("cart-modal");
const cartItemsElement = document.getElementById("cart-items");
const closeBtn = document.getElementsByClassName("close")[0];

let cartItems = [];
let products = [];

// Fetch products from API
fetchProducts();

// Add event listeners
productListElement.addEventListener("click", handleAddToCart);
closeBtn.addEventListener("click", closeCartModal);
window.addEventListener("click", outsideClick);

async function fetchProducts() {
  try {
    const response = await fetch(productApiUrl);
    products = await response.json();
    displayProducts(products);
  } catch (error) {
    displayErrorMessage("Failed to fetch products. Please try again later.");
  }
}

function displayProducts(products) {
  productListElement.innerHTML = "";

  products.forEach((product) => {
    const productCard = createProductCard(product);
    productListElement.appendChild(productCard);
  });
}

function createProductCard(product) {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const imageElement = document.createElement("img");
  imageElement.src = product.image;
  imageElement.alt = product.title;
  productCard.appendChild(imageElement);

  const titleElement = document.createElement("h3");
  titleElement.textContent = product.title;
  productCard.appendChild(titleElement);

  const priceElement = document.createElement("p");
  priceElement.textContent = `$${product.price.toFixed(2)}`;
  productCard.appendChild(priceElement);

  const addToCartBtn = document.createElement("button");
  addToCartBtn.textContent = "Add to Cart";
  addToCartBtn.dataset.productId = product.id;
  productCard.appendChild(addToCartBtn);

  return productCard;
}

function handleAddToCart(event) {
  if (event.target.tagName === "BUTTON") {
    const productId = event.target.dataset.productId;
    const product = getProductById(productId);
    if (product) {
      addToCart(product);
    }
  }
}

function getProductById(productId) {
  // Fetch the product with the given ID from the API response or your products array
  // Return the product object if found, otherwise return null
  // Note: In this example, we assume that all products are fetched initially and stored in the products array
  return products.find((product) => product.id === parseInt(productId));
}

function addToCart(product) {
  const existingCartItem = cartItems.find((item) => item.id === product.id);

  if (existingCartItem) {
    existingCartItem.quantity++;
  } else {
    cartItems.push({ ...product, quantity: 1 });
  }

  openCartModal();
  displayCartItems();
}

function openCartModal() {
  cartModal.style.display = "block";
}

function closeCartModal() {
  cartModal.style.display = "none";
}

function outsideClick(event) {
  if (event.target === cartModal) {
    closeCartModal();
  }
}

function displayCartItems() {
  cartItemsElement.innerHTML = "";

  cartItems.forEach((item) => {
    const cartItem = createCartItem(item);
    cartItemsElement.appendChild(cartItem);
  });
}

function createCartItem(item) {
  const cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");

  const imageElement = document.createElement("img");
  imageElement.src = item.image;
  imageElement.alt = item.title;
  cartItem.appendChild(imageElement);

  const itemInfoElement = document.createElement("div");
  itemInfoElement.classList.add("cart-item-info");

  const titleElement = document.createElement("h3");
  titleElement.textContent = item.title;
  itemInfoElement.appendChild(titleElement);

  const priceElement = document.createElement("p");
  priceElement.textContent = `Price: $${item.price.toFixed(2)}`;
  itemInfoElement.appendChild(priceElement);

  const quantityElement = document.createElement("div");
  quantityElement.classList.add("cart-item-quantity");

  const quantityInput = document.createElement("input");
  quantityInput.type = "number";
  quantityInput.min = "1";
  quantityInput.value = item.quantity;
  quantityElement.appendChild(quantityInput);

  itemInfoElement.appendChild(quantityElement);
  cartItem.appendChild(itemInfoElement);

  return cartItem;
}

function displayErrorMessage(message) {
  const errorMessageElement = document.createElement("p");
  errorMessageElement.classList.add("error-message");
  errorMessageElement.textContent = message;
  productListElement.appendChild(errorMessageElement);
}
