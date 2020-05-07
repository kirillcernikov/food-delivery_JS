const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}


// day 1

const buttonAuth = document.querySelector(`.button-auth`);
const modalAuth = document.querySelector(`.modal-auth`);
const closeAuth = document.querySelector(`.close-auth`);
const loginForm = document.querySelector(`#loginForm`);
const loginInput = document.querySelector(`#login`);
const userName = document.querySelector(`.user-name`);
const buttonOut = document.querySelector(`.button-out`);

let login = localStorage.getItem(`gloDelivery`);

function toogleModalAuth() {
  modalAuth.classList.toggle("is-open");
  loginInput.style.border = ``;
}



function authorized() {

  function logOut() {
    login = ``;
    localStorage.removeItem(`gloDelivery`);
    buttonAuth.style.display = ``;
    userName.style.display = ``;
    buttonOut.style.display = ``;
    buttonOut.removeEventListener(`click` , logOut)
    checkAuth();

  }


  console.log(`авторизован`);

  userName.textContent = login;
  

  buttonAuth.style.display = `none`;
  userName.style.display = `inline`;
  buttonOut.style.display = `block`;

  buttonOut.addEventListener(`click` , logOut)
}

function notAuthorized () {

  console.log(`не авторизован`);

  function logIn(event){
    event.preventDefault();

    if(loginInput.value.trim()){
      login = loginInput.value;
      localStorage.setItem(`gloDelivery`, login)
      toogleModalAuth();
      buttonAuth.removeEventListener(`click`, toogleModalAuth);
      closeAuth.removeEventListener(`click`, toogleModalAuth);
      logInForm.removeEventListener(`submit`, logIn);
      logInForm.reset();
      checkAuth();
    } else{
      loginInput.style.border = `3px solid red`;
    }
  }



  buttonAuth.addEventListener(`click`, toogleModalAuth);
  closeAuth.addEventListener(`click`, toogleModalAuth);
  logInForm.addEventListener(`submit`, logIn);

}

function checkAuth(){
  if (login) {
    authorized();
  } else {
    notAuthorized();
  }
}

checkAuth();
