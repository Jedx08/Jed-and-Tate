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

export function matchItem(productId) {
  let matchItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchItem = cartItem;
    }
  });

  if (matchItem) {
    matchItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1
    });
  }
}