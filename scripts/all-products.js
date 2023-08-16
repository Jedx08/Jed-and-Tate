// import { products } from "../data/products.js";
// import { cart } from "../data/cart.js";

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

        <button class="add-to-cart-button js-add-to-cart" title="add to cart" data-product-id="${product.id}">
          <span class="material-icons-outlined">
            shopping_cart
          </span>
        </button>
      </div>
    </div>
  `;
});

document.querySelector('.js-product-all').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      cart.push({
        productId: productId
      });

      saveToStorage();
  });
});