const openButtons = document.querySelectorAll('[data-modal-target]')
const closeButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

let fields = document.querySelectorAll('form > .inputBox input')
let submitButton = document.querySelector('form > button')

fields = Array.from(fields) // Turn fields into an Array to access the ".every" method.

fields.forEach(field => {
  field.addEventListener('keyup', () => {
    submitButton.disabled = !fields.every(field => field.value)
  })
})
// const inputs = document.getElementsByClassName('required');
// const live = document.querySelector('input [type="submit"]');
// let cansubmit = true;

// live.addEventListener( () => {
//   for (var index = 0; index < inputs.length; index++) {
//     let changedInput = inputs[index];
//     if (changedInput.value.trim() === "" || changedInput.value === null) {
//       cansubmit = false;
//       break;
//     }
//   }
//   // live.disable = !cansubmit
// })

openButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    open(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.learn.active')
  modals.forEach(modal => {
    close(modal)
  })
})

closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.learn')
    close(modal)
  })
})

function open(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function close(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


// Arjun


let slideIndex = 1;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  
  slides[slideIndex - 1].style.display = "block";
  
  setTimeout(showSlides, 2000);
}






//rithika

const cartButton=document.querySelector('.cartPress');
const addCartButtons=document.querySelectorAll('#cookiebutton');
const setCartCount=document.getElementById('setCount');
const displayCartPopup=document.querySelector('.cartPopup')
const displayCartOverlay=document.querySelector('.cartOverlay');
const clearCartFunction=document.querySelector('.clearCart');
const closePopupCart=document.querySelector('.closeCartPopup');
const setCartItems=document.getElementsByClassName('cartItems');
let cartCount=0;
let cartItem=[];

addCartButtons.forEach((addCartButtons)=>{
  addCartButtons.addEventListener('click',()=>{
    
    cartItem.push(addCartButtons.value);
    
    cartCount+=1;
     setCartCount.innerHTML=cartCount;
    

  })

})

cartButton.addEventListener('click',()=>{

  
  displayCartPopup.classList.add('active');
  displayCartOverlay.classList.add('active');
  
  
  if(cartItem!=null){
    
      document.querySelector('.cartItems').innerHTML=cartItem;
    
    
  }
  else{
    document.querySelector('.cartItems').innerHTML="Cart is empty";
  }
    
  

     
    

  
})

closePopupCart.addEventListener('click',()=>{
  displayCartPopup.classList.remove('active');
  displayCartOverlay.classList.remove('active');

})



clearCartFunction.addEventListener('click',()=>{
   if(cartCount!=0){
  setCartCount.innerHTML=0;
  document.querySelector('.cartItems').innerHTML="Cart is empty";
  cartItem=null;
  }

})


// Athisree

function togglePopup() {
  // document.getElementById("demo").innerHTML = "Hello World";
  alert('Please Login to order');
}


// subin


function isinputnumber(e) {
  var keyCode = e.keyCode || e.which;

  var lblError = document.getElementById("lblError");
  lblError.innerHTML = "";
  var regex = /^[A-Za-z]+$/;
  var isValid = regex.test(String.fromCharCode(keyCode));
  if (!isValid) {
    lblError.innerHTML = "Only Alphabets allowed.";
  }

  return isValid;

}


function issinputnumber(e) {
  var keyCode = e.keyCode || e.which;

  var lblErrorr = document.getElementById("lblErrorr");
  lblErrorr.innerHTML = "";

  //Regex for Valid Characters i.e. Alphabets.
  var regex = /^[A-Za-z]+$/;

  //Validate TextBox value against the Regex.
  var isValid = regex.test(String.fromCharCode(keyCode));
  if (!isValid) {
    lblErrorr.innerHTML = "Only Alphabets allowed.";
  }

  return isValid;



}



let button=document.querySelector(".button-div");
var popup=document.querySelector('.popup');
button.addEventListener('click',()=>
{
    popup.classList.add("active");

})
popup.addEventListener('click',()=>
{
    popup.classList.remove("active");

})