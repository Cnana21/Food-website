let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

}

window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.scrollY > 60) {
        document.querySelector('#scroll-top').classList.add('active');
    } else {
        document.querySelector('#scroll-top').classList.remove('active');
    }

}




// Get the form element
const form = document.querySelector('form');

// Get the input elements
const fullNameInput = document.getElementById('fname');
const emailInput = document.getElementById('email');
const addressInput = document.getElementById('adr');
const cityInput = document.getElementById('city');
const stateInput = document.getElementById('state');
const zipInput = document.getElementById('zip');
const cardNameInput = document.getElementById('cname');
const cardNumberInput = document.getElementById('ccnum');
const expMonthInput = document.getElementById('expmonth');
const expYearInput = document.getElementById('expyear');
const cvvInput = document.getElementById('cvv');

// Listen for form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent the default form submission

    // Check if the input values are valid
    if (
        fullNameInput.value === '' ||
        emailInput.value === '' ||
        addressInput.value === '' ||
        cityInput.value === '' ||
        cardNameInput.value === '' ||
        cardNumberInput.value === '' ||
        expMonthInput.value === '' ||
        expYearInput.value === '' ||
        cvvInput.value === ''
    ) {
        alert('Please fill in all the required fields.'); // show an alert message
    } else {
        form.submit(); // submit the form
    }
});







/* Cart*/


function getURLParameters() {
    const params = {};
    const urlParams = new URLSearchParams(window.location.search);
    for (const [key, value] of urlParams.entries()) {
        params[key] = value;
    }
    return params;
  }
  
  
  function addToCart(productName, productPrice) {
    const cartItems = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
  
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        <span>${productName}</span>
        <span>$${productPrice}</span>
    `;
  
    cartItems.appendChild(cartItem);
  
    const currentTotalPrice = parseFloat(cartTotalPrice.innerText.replace('$', ''));
    cartTotalPrice.innerText = `$${(currentTotalPrice + parseFloat(productPrice)).toFixed(2)}`;
  }
  
  
  const urlParameters = getURLParameters();
  if (urlParameters.product && urlParameters.price) {
    const productName = decodeURIComponent(urlParameters.product);
    const productPrice = decodeURIComponent(urlParameters.price);
  
    addToCart(productName, productPrice);
  }