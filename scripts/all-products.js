import { products } from "../data/products.js";

let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
      <div class="image-container">
        <img src="${product.image}" class="product-image">
      </div>

      <div class="product-name">
        ${product.name}
      </div>

      <div class="price-icons">
        <div class="product-price">
          ${product.price}
        </div>

        <button class="add-to-cart-button" title="add to cart">
          <span class="material-icons-outlined">
            shopping_cart
          </span>
        </button>
      </div>
    </div>
  `;
});

document.querySelector('.js-product-all').innerHTML = productsHTML;