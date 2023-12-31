import { products } from "../data/products.js";
import { saveToStorage, matchItem, addedCart } from "../data/cart.js";
import { updateCart } from "./update-cart.js";

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
      <div class="image-container">
        <img src="${product.image}" class="product-image">
      </div>

      <div class="product-name">
        ${product.name}
        <span class="product-added product-added-${product.productId}"></span>
      </div>

      <div class="price-icons">
        <div class="product-price">
          ${product.price}
        </div>

        <button class="add-to-cart-button js-add-to-cart" title="add to cart" data-product-id="${product.productId}">
          <span class="material-icons-outlined add-to-cart-icon">
            add_shopping_cart
          </span>  
        </button>
      </div>
    </div>
  `;
});

document.querySelector('.js-product-all').innerHTML = productsHTML;

updateCart()

document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      addedCart(productId);
      matchItem(productId);
      saveToStorage();
      updateCart();
  });
});