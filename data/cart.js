import { updateCart } from "../scripts/update-cart.js";

export let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // if (!cart) {
  //   cart = [
  //     {
  //       productId: '00',
  //       quantity: 0
  //     }
  //   ];
  // }

export function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem)
    }
  });
  cart = newCart;
  saveToStorage();
  updateCart();
}