// import { products } from "../data/products.js";
// import { cart } from "./../data/cart.js";

let cartSummaryHTML = '';

cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let productFound;

  products.forEach((product) => {
    
    if (product.id === productId) {
      productFound = product;
    }
  });

  cartSummaryHTML += `
    <div class="grid-products">
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
          </div>
          <div>
            <div>${productFound.name}</div>
            <div>₱${productFound.price}</div>
            <div>20</div>
          </div>
        </div>
      </div>
    </div>
  `
});

document.querySelector('.js-cart-products').innerHTML = cartSummaryHTML;