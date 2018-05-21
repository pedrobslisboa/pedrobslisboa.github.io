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
let cardImage = $('.card-image');
let card = $('.card');
let twitterButton = $('.twitter-button');
let facebookButton = $('.facebook-button');
let linkedinButton = $('.linkedin-button');
let twitter = $('.twitter');
let facebook = $('.facebook');
let linkedin = $('.linkedin');
let social = $('.social');
let info = $('.info');

let projects = [{imgUrl:'https://image.ibb.co/f93rAd/Captura_de_Tela_2018_05_16_a_s_14_32_32.jpg',url:'https://codepen.io/pedrobslisboa/full/xjPjLj/'},{imgUrl:'https://image.ibb.co/f93rAd/Captura_de_Tela_2018_05_16_a_s_14_32_32.jpg',url:'https://codepen.io/pedrobslisboa/full/xjPjLj/'}];



$( "form" ).submit(function(e){
  e.preventDefault();
});

$(".project").each(function(event){

  $(this).hover(function(e){
    $(this).children().children(".description").stop().fadeIn();
  },function(){
    $(this).children().children(".description").stop().fadeOut();
  });
});

function contactHide() {
  var contactWidth = contact.width();
  contact.stop().animate({right: -contactWidth - 50 +'px'});
}
function contactShow() {
  var contactWidth = contact.width();
  contact.stop().animate({right: 0});
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
function hoverInfo(){
  
  let infoThis = $(this);
  let cardImageThis = infoThis.parents('.card').children('.card-image');
  
  
  $(this).children('.info-off').css({
    display:'none'
  });
  $(this).children('.info-on').css({
    display:'block'
  });
  
  cardImageThis.animate({

    top: '-200px'
    
  });
  
}
function hoverCard(){
  
  $(this).children('.card-image').stop().animate({
    
    top: '-2em'
    
  });
  
}
function outCard(){ 
  let cardThis = $(this);
  let infoThis = $(this).find('.info');
  let cardImageThis = cardThis.children('.card-image');
  
  console.log(infoThis);
  
  cardImageThis.stop().animate({
    
    top: '0'
    
  });
  infoThis.children('.info-off').css({
    display:'block'
  });
  infoThis.children('.info-on').css({
    display:'none'
  });
    cardImageThis.stop().animate({
    
    top: '0'
    
  });
}
function hoverSocial(){
  
    $(this).children().css({
    
    fill:'#2196F3',
    
  });
}
function outSocial(){
  
    $(this).children().css({
    
    fill:'black',
    
  });
}

$(document).ready(function(){
  info.click(hoverInfo);
social.each(function(){
  $(this).hover(hoverSocial,outSocial);
});
card.each(function(){
  $(this).hover(hoverCard,outCard);
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
  } else if(validAbout == 1 && validPortfolio == 2){
      main.transition({y:'0px'});
      validPortfolio = 1; 
  } else {
    clickHome();
  }
  
});
contactClose.click(contactHide);
contactLink.click(contactShow);
portfolio.click(clickPortfolio);
homeLink.click(clickHome);
});








