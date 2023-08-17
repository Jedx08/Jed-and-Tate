import { cart } from "../data/cart.js";

export function updateCart() {
  let cartQuantity = cart.length;

  if (!cartQuantity) {
    cartQuantity = '';
  }

  document.querySelector('.js-quantity').innerHTML = cartQuantity;
}