const navBar = `<div>
<header>
  <a href="./../index.html">
    <h2 class="logo"><img src="./image/icon.png" class="logo-image"></h2>
  </a>
  <nav class="navigation">
   <ul>
    <li><a href="./../index.html">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contacts</a></li>
    <li>
      <a href="./../checkout.html">
        <div class="cart-container">
          <div class="cart-icon">
            <span class="material-icons-outlined cart-icon-outlined">
              shopping_cart
            </span>
          </div>
          <div class="cart-quantity js-quantity">
            
          </div>
        </div> 
      </a>
    </li>
   </ul>
  </nav>

  <div class="burger-btn">
    <label for="check-btn">
      <input type="checkbox" id="check-btn" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
      <span class="material-icons-outlined">
        menu
      </span>

      <!-- <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button> -->

      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasRightLabel">Fictional Kicks</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        
        <div class="offcanvas-body offcanvas-items">
          <a href="./../index.html">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contacts</a>
        </div> 
      </div>
    </label>

  </div>
</header>
</div>`;

document.querySelector('.js-nav').innerHTML = navBar;


window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 30);
})