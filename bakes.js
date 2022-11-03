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


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


// Athisree

// function togglePopup() {
//   // document.getElementById("demo").innerHTML = "Hello World";
//   alert('Please Login to order');
// }