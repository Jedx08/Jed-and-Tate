import { products } from "./../data/products.js";
import { cart, removeFromCart } from "./../data/cart.js";
import { updateCart } from "./update-cart.js";

updateCart();

let cartSummaryHTML = '';


cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let productFound;

  products.forEach((product) => {
    
    if (product.productId === productId) {
      productFound = product;
    }
  });

  cartSummaryHTML += `
    <div class="grid-products js-products-container-${productFound.productId}">
      <div class="grid-products-span1">
        <div class="grid-products-img-container">
          <img src="${productFound.image}" alt="">
        </div>
      </div>
      <div class="grid-products-span2">
        <div class="flex-products-info">
          <div>
            <div>Name:</div>
            <div>Price:</div>
            <div>Quantity:</div>
            <div></div>
          </div>
          <div>
            <div>${productFound.name}</div>
            <div>₱${productFound.price}</div>
            <div>${cartItem.quantity}</div>
            <div>
              <span>Update</span>
              <span class="product-delete js-delete-span" data-product-id="${productFound.productId}">Delete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
});

document.querySelector('.js-cart-products').innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-delete-span')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      removeFromCart(productId)
      const container = document.querySelector(`.js-products-container-${productId}`);

      container.remove();
    });    
  });