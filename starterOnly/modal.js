function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
// page d'inscription
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closemodal = document.querySelector(".close"); 
// croix de fermeture

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// click sur "je m'inscrit" ouverture modal
closemodal.addEventListener("click", closeConfirm); 
// click sur croix fermeture

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// ouverture du modal

function closeConfirm() {
  modalbg.style.display = "none";
} 
// fermeture du modal



