var elSiteHeader = document.querySelector(".header")

var elSiteHeaderToggle = elSiteHeader.querySelector(".nav__button")

if(elSiteHeaderToggle){
  elSiteHeaderToggle.addEventListener("click", function(){
    elSiteHeader.classList.toggle("header--open")
  })
}





