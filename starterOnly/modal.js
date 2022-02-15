function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground"); //On pointe sur la page d'inscription
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelector(".close");  //On pointe sur la croix de fermeture
const firstName = document.getElementById("first"); //On pointe sur l'input prénom
const lastName = document.getElementById("last"); //On pointe sur l'input nom
const emailUser = document.getElementById("email"); //On pointe sur l'input email
const birthdateUser = document.getElementById("birthdate"); //On pointe sur l'input anniversaire


//DOM Element erreur
const errorFirst = document.getElementById("error-first"); // Erreur prénom
const errorLast = document.getElementById("error-last"); // Erreur nom


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal)); //Si click sur "btn je m'inscrit" ouverture modal
closeModal.addEventListener("click", closeConfirm); //Si click sur croix fermeture utilise fonction CloseConfirm
firstName.addEventListener("change", firstValidation); // Si changement sur prénom utilise fonction firstValidation
lastName.addEventListener("change", lastValidation); // Si changement sur nom utilise fonction lastValidation
// launch modal form

function launchModal() {
  modalbg.style.display = "block";
}
// ouverture du modal

function closeConfirm() {
  modalbg.style.display = "none";
} 
// fermeture du modal


function firstValidation() {
  if (firstName.value.length > 1){ // Si le nombre de caractères est > 1                                {
      firstName.style.border = "3px solid #279E7A"; // La bordure devient verte
      errorFirst.style.display = "none"                              
      return true // Input prénom valide
    } else {
      errorFirst.style.display = "block"
      errorFirst.innerHTML = "Votre prénom doit contenir au moins 2 caractères"
      firstName.style.border = "3px solid #FE142F"; // La bordure devient rouge
      return false; // Input prénom invalide
    }
  }

  function lastValidation() {
    if (lastName.value.length > 1){ // Si le nombre de caractères est > 1                                {
        lastName.style.border = "3px solid #279E7A"; // La bordure devient verte
        errorLast.style.display = "none"                              
        return true // Input nom valide
      } else {
        errorLast.style.display = "block"
        errorLast.innerHTML = "Votre prénom doit contenir au moins 2 caractères"
        lastName.style.border = "3px solid #FE142F"; // La bordure devient rouge
        return false; // Input nom invalide
      }
    }

