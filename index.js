/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

let $$ = document.querySelectorAll.bind(document);
let bio = $(".bio");
let about = $(".about");
let responsive = $(".responsive");
let responsiveHeight = responsive.offsetHeight;
let portfolioBody = $(".portfolio");
let portfolio = $(".portfolio-link");
let contactLink = $(".contact-link");
let contactClose = $(".contact-close");
let contact = $(".contact");
let nameWork = $(".name-work")
let home = $(".home");
let homeLink = $(".home-link");
let main = $("main");
let portfolioWidth = portfolioBody.offsetWidth;
let homeHeight = home.height();
let validPortfolio = 1;
let aboutLink = $('.about-link');
let validAbout = 0;
let description = $(".description");
let project =  $(".project");

console.log(project);

$(".project").each(function(event){

  $(this).hover(function(e){
    $(this).children().children(".description").stop().fadeIn();
  },function(){
    $(this).children().children(".description").stop().fadeOut();
  });
});

aboutLink.click(function(){
  if(validAbout == 0){
    main.transition({y:'0px'});
    nameWork.fadeToggle(function(){
    about.fadeToggle();
    validPortfolio = 1;
    homeLinkShow();
  });
    validAbout = 1;
  } else{
    clickHome();
  }
  
  
});


contactClose.click(contactHide);
contactLink.click(contactShow);
portfolio.click(clickPortfolio);
homeLink.click(clickHome);

function contactHide() {
  var contactWidth = contact.width();
  contact.animate({right: -contactWidth - 50 +'px'});
}
function contactShow() {
  var contactWidth = contact.width();
  contact.animate({right: 0});
}
function clickHome(){
  homeLinkHide();
  validPortfolio = 1;
  main.transition({y:'0px'});
  about.fadeOut(function(){
  nameWork.fadeIn();
  });
  validAbout = 0;
  }
function clickPortfolio() {
  let portfolioHeight = portfolioBody.height();
  if (validPortfolio == 1) {
    main.transition({y:'-' + portfolioHeight + 'px'});
    validPortfolio = 2;
    homeLinkShow();
  } else if (validPortfolio == 2) {   
    main.transition({y:'0px'});
    validPortfolio = 1; 
    homeLinkHide();
  }
}
function homeLinkShow() {
  homeLink.fadeIn();
}
function homeLinkHide() {
  homeLink.fadeOut();
}
