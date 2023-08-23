import { cart } from "../data/cart.js";

export function orderSummary() {
  let quantity = 0;
  let allPrice = 0;

  function cartAllQuantity() {

    cart.forEach(cartItem => {
    
      const num = cartItem.quantity;
    
      quantity += num;
      
    });
  }

  function quantityAllPrice() {

    cart.forEach(cartItem => {
    
      const num = cartItem.price;
      const cartPieces = cartItem.quantity
    
      const total = num * cartPieces;
      allPrice += total;
      
    });
  }

  cartAllQuantity();
  quantityAllPrice();
  let allTotal = allPrice + 60;
  const formatAllPrice = new Intl.NumberFormat().format(allPrice);
  const formatAllTotal = new Intl.NumberFormat().format(allTotal);

  let orderHTML = `
    <div>
      <div class="checkout-summary">
        <div class="order-summary">Order Summary</div>
          <div class="payment-summary">
            <div>Items ( <span class="quantity-count">${quantity}</span> ):</div>
            <div>₱${formatAllPrice}</div>
          </div>
          <div class="payment-summary">
            <div>Shipping Total:</div>
            <div>₱60</div>
          </div>
          <hr>
          <div class="payment-summary">
            <div>Total Payment:</div>
            <div>₱${formatAllTotal}</div>
          </div>
        </div>
        <div>
          <button class="place-order">Place your Order</button>
        </div>
    </div>
    `;

  if ( cart.length > 0 ) {
    document.querySelector('.grid-checkout-span2').innerHTML = orderHTML;
  } else {
    document.querySelector('.grid-checkout-span2').innerHTML = '';
    document.querySelector('.js-cart-empty').innerHTML = 'Your Cart is Empty';
  }
}

