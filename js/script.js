var link = document.querySelector(".main-nav__icon-menu");
var menu = document.querySelector(".main-nav__menu");
var mainLogo = document.querySelector(".main-nav__logo");
var hamburger = document.querySelector(".main-nav__icon-menu");
var form = document.querySelector(".form__main-field");

if (link) {
  menu.classList.remove("main-nav__menu--without-js");
  mainLogo.classList.remove("main-nav__logo--without-js");
  hamburger.classList.remove("main-nav__icon-menu--without-js");
  link.addEventListener("click", function(event) {
    event.preventDefault();
    menu.classList.toggle("main-nav__menu--show");
    link.classList.toggle("main-nav__icon-menu--close");
  });
}

function hasValue(elem) {
  return elem.value;
}

if (form) {
  var required = form.querySelectorAll("[required]");
  var popupSuccess = document.querySelector(".popup--wrapper-true");
  var popupFalse = document.querySelector(".popup--wrapper-false");
  var buttonOk = popupFalse.querySelector(".form-btn--ok");
  var buttonClose = popupSuccess.querySelector(".form-btn--close");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    for (i = 0; i < required.length; i++) {
      if (!required[i].value) {
        popupFalse.classList.add("popup--show");
        return;
      }
    }
    popupSuccess.classList.add("popup--show");
  });
  buttonOk.addEventListener("click", function(event) {
    popupFalse.classList.remove("popup--show");
  });
  buttonClose.addEventListener("click", function(event) {
    popupSuccess.classList.remove("popup--show");
  });
}
