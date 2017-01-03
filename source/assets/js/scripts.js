var deTheme = (function(){
  'use strict'

  function init() {
    // sandwichMenu();
  }

  function sandwichMenu() {
    var sandwich = document.getElementsByClassName('de-sandwich')[0];
    var menu = document.getElementsByClassName('nav')[0];
    sandwich.addEventListener('click', function(){
      menu.classList.toggle('de-sidebar-visible');
      sandwich.classList.toggle('de-sidebar-visible');
    });
  }

  return {
    init: init
  }

}());

window.onload = deTheme.init();
