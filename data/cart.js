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