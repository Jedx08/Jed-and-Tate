import { products } from "./../data/products.js";
import { cart, removeFromCart, saveToStorage } from "./../data/cart.js";
import { updateCart } from "./update-cart.js";
import { orderSummary } from "./order-summary.js";

updateCart();
orderSummary();

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
            <div class="product-info-span1">Name:</div>
            <div class="product-info-span1">Price:</div>
            <div class="product-info-span1">Quantity:</div>
            <div></div>
          </div>
          <div>
            <div class="product-info-span1">${productFound.name}</div>
            <div class="product-info-span1">₱${productFound.price}</div>
            <div class="cart-quantity-container">
              <div class="js-cart-quantity-${productFound.productId}">
              ${cartItem.quantity}
              </div>
              <div class="quantity-edit-container">
                <input type="number" class="input-quantity-off js-input-quantity-${productFound.productId}" id="pquantity">
                <span class="update-product js-update-quantity js-quantity-${productFound.productId}" data-product-id="${productFound.productId}">Update</span>
                <span class="product-delete js-delete-span" data-product-id="${productFound.productId}">Delete</span>
              </div>
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

const updateQuantity = document.querySelectorAll('.js-update-quantity');

updateQuantity.forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    const quantity = document.querySelector(`.js-quantity-${productId}`);
    const inputQuantity = document.querySelector(`.js-input-quantity-${productId}`);
    const cartQuantity = document.querySelector(`.js-cart-quantity-${productId}`)

    let updateCartQuantity;

    cart.forEach((cartItem) => {
      if ( cartItem.productId === productId ) {
        updateCartQuantity = cartItem;
      }
    });

    function newQuantity() {
      cartQuantity.innerHTML = inputQuantity.value;

      const quantityCount = updateCartQuantity.quantity = Number(inputQuantity.value);

      if (quantityCount <= 0) {
        const container = document.querySelector(`.js-products-container-${productId}`);

        removeFromCart(productId);
        container.remove();
      }
      
      saveToStorage();
      updateCart();
      orderSummary();
    }
    
    if ( quantity.innerHTML === "Update") {
      quantity.innerHTML = "Save";
      inputQuantity.classList.add('input-quantity-on');
    } else {
      quantity.innerHTML = "Update";
      inputQuantity.classList.remove('input-quantity-on');
      newQuantity();
    }

    inputQuantity.addEventListener('keydown', () => {
      if ( event.key === "Enter" ) {
        quantity.innerHTML = "Update";
        inputQuantity.classList.remove('input-quantity-on');
        newQuantity();
      }
    });
  });
});