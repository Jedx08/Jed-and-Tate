const navBar = `<div>
<header>
  <a href="./../index.html">
    <h2 class="logo"><img src="./image/icon.png" class="logo-image"></h2>
  </a>
  <nav class="navigation">
    <a href="./../index.html">Home</a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Contacts</a>
    <a href="./../checkout.html">
      <img href="./../checkout.html" src="./../image/cart.png" title="Cart" class="cart-image">
    </a>
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