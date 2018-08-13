/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

let $$ = document.querySelectorAll.bind(document);
let bio = $(".bio");
let about = $(".about");
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
let project =  $(".project");
let twitterButton = $('.twitter-button');
let facebookButton = $('.facebook-button');
let linkedinButton = $('.linkedin-button');
let twitter = $('.twitter');
let facebook = $('.facebook');
let linkedin = $('.linkedin');
let htmlLogo = `M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z`;
let css3Logo = `M5,3L4.35,6.34H17.94L17.5,8.5H3.92L3.26,11.83H16.85L16.09,15.64L10.61,17.45L5.86,15.64L6.19,14H2.85L2.06,18L9.91,21L18.96,18L20.16,11.97L20.4,10.76L21.94,3H5Z`;
let jsLogo = `M3,3H21V21H3V3M7.73,18.04C8.13,18.89 8.92,19.59 10.27,19.59C11.77,19.59 12.8,18.79 12.8,17.04V11.26H11.1V17C11.1,17.86 10.75,18.08 10.2,18.08C9.62,18.08 9.38,17.68 9.11,17.21L7.73,18.04M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86Z`;
let reactjs = `M12,10.11C13.03,10.11 13.87,10.95 13.87,12C13.87,13 13.03,13.85 12,13.85C10.97,13.85 10.13,13 10.13,12C10.13,10.95 10.97,10.11 12,10.11M7.37,20C8,20.38 9.38,19.8 10.97,18.3C10.45,17.71 9.94,17.07 9.46,16.4C8.64,16.32 7.83,16.2 7.06,16.04C6.55,18.18 6.74,19.65 7.37,20M8.08,14.26L7.79,13.75C7.68,14.04 7.57,14.33 7.5,14.61C7.77,14.67 8.07,14.72 8.38,14.77C8.28,14.6 8.18,14.43 8.08,14.26M14.62,13.5L15.43,12L14.62,10.5C14.32,9.97 14,9.5 13.71,9.03C13.17,9 12.6,9 12,9C11.4,9 10.83,9 10.29,9.03C10,9.5 9.68,9.97 9.38,10.5L8.57,12L9.38,13.5C9.68,14.03 10,14.5 10.29,14.97C10.83,15 11.4,15 12,15C12.6,15 13.17,15 13.71,14.97C14,14.5 14.32,14.03 14.62,13.5M12,6.78C11.81,7 11.61,7.23 11.41,7.5C11.61,7.5 11.8,7.5 12,7.5C12.2,7.5 12.39,7.5 12.59,7.5C12.39,7.23 12.19,7 12,6.78M12,17.22C12.19,17 12.39,16.77 12.59,16.5C12.39,16.5 12.2,16.5 12,16.5C11.8,16.5 11.61,16.5 11.41,16.5C11.61,16.77 11.81,17 12,17.22M16.62,4C16,3.62 14.62,4.2 13.03,5.7C13.55,6.29 14.06,6.93 14.54,7.6C15.36,7.68 16.17,7.8 16.94,7.96C17.45,5.82 17.26,4.35 16.62,4M15.92,9.74L16.21,10.25C16.32,9.96 16.43,9.67 16.5,9.39C16.23,9.33 15.93,9.28 15.62,9.23C15.72,9.4 15.82,9.57 15.92,9.74M17.37,2.69C18.84,3.53 19,5.74 18.38,8.32C20.92,9.07 22.75,10.31 22.75,12C22.75,13.69 20.92,14.93 18.38,15.68C19,18.26 18.84,20.47 17.37,21.31C15.91,22.15 13.92,21.19 12,19.36C10.08,21.19 8.09,22.15 6.62,21.31C5.16,20.47 5,18.26 5.62,15.68C3.08,14.93 1.25,13.69 1.25,12C1.25,10.31 3.08,9.07 5.62,8.32C5,5.74 5.16,3.53 6.62,2.69C8.09,1.85 10.08,2.81 12,4.64C13.92,2.81 15.91,1.85 17.37,2.69M17.08,12C17.42,12.75 17.72,13.5 17.97,14.26C20.07,13.63 21.25,12.73 21.25,12C21.25,11.27 20.07,10.37 17.97,9.74C17.72,10.5 17.42,11.25 17.08,12M6.92,12C6.58,11.25 6.28,10.5 6.03,9.74C3.93,10.37 2.75,11.27 2.75,12C2.75,12.73 3.93,13.63 6.03,14.26C6.28,13.5 6.58,12.75 6.92,12M15.92,14.26C15.82,14.43 15.72,14.6 15.62,14.77C15.93,14.72 16.23,14.67 16.5,14.61C16.43,14.33 16.32,14.04 16.21,13.75L15.92,14.26M13.03,18.3C14.62,19.8 16,20.38 16.62,20C17.26,19.65 17.45,18.18 16.94,16.04C16.17,16.2 15.36,16.32 14.54,16.4C14.06,17.07 13.55,17.71 13.03,18.3M8.08,9.74C8.18,9.57 8.28,9.4 8.38,9.23C8.07,9.28 7.77,9.33 7.5,9.39C7.57,9.67 7.68,9.96 7.79,10.25L8.08,9.74M10.97,5.7C9.38,4.2 8,3.62 7.37,4C6.74,4.35 6.55,5.82 7.06,7.96C7.83,7.8 8.64,7.68 9.46,7.6C9.94,6.93 10.45,6.29 10.97,5.7Z`;
let sass = `M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M10,15.33C10.16,15.87 10.14,16.37 10,16.83C10,16.88 9.96,16.93 9.94,17C9.92,17 9.9,17.07 9.87,17.12C9.76,17.36 9.6,17.59 9.41,17.79C8.83,18.43 8,18.67 7.67,18.47C7.29,18.25 7.5,17.35 8.16,16.64C8.88,15.88 9.92,15.38 9.92,15.38V15.38L10,15.33M18.27,6.28C17.82,4.5 14.87,3.92 12.09,4.91C10.43,5.5 8.63,6.42 7.34,7.63C5.81,9.07 5.56,10.32 5.66,10.84C6,12.68 8.54,13.89 9.58,14.78V14.79C9.28,14.94 7.04,16.07 6.5,17.23C5.96,18.45 6.6,19.33 7,19.45C8.34,19.81 9.69,19.16 10.41,18.07C11.11,17.03 11.06,15.68 10.75,15C11.17,14.9 11.66,14.85 12.28,14.92C14.04,15.13 14.38,16.22 14.31,16.68C14.25,17.14 13.88,17.39 13.76,17.47C13.64,17.54 13.6,17.57 13.61,17.63C13.62,17.71 13.68,17.71 13.78,17.69C13.93,17.66 14.71,17.32 14.74,16.47C14.78,15.39 13.75,14.19 11.93,14.22C11.18,14.24 10.71,14.31 10.37,14.44L10.29,14.35C9.16,13.15 7.08,12.3 7.17,10.68C7.2,10.09 7.4,8.55 11.17,6.67C14.25,5.13 16.72,5.55 17.15,6.5C17.76,7.83 15.83,10.32 12.63,10.68C11.41,10.82 10.76,10.34 10.6,10.17C10.43,10 10.41,9.97 10.35,10C10.24,10.07 10.31,10.23 10.35,10.33C10.44,10.58 10.84,11 11.5,11.24C12.09,11.43 13.53,11.54 15.26,10.87C17.2,10.12 18.72,8.03 18.27,6.28Z`;
var projects = [{title:'Pokedex React',img:'Pokedex-01.jpg',link:'https://pokedexreactjs.herokuapp.com/',content:"Dev and Designed by me for fun and study. It's beta, for now has only 25 pokemons",tools:[htmlLogo,reactjs,css3Logo]},{title:'Clicker React',img:'clicker.jpg',link:'https://codepen.io/pedrobslisboa/full/QBqzMW/',content:"Dev and Designed by me for fun and study",tools:[htmlLogo,sass,reactjs]},{title:'Chronometer React',img:'chronometer.jpg',link:'https://codepen.io/pedrobslisboa/full/QByqwg/',content:"Dev and Designed by me for fun and study",tools:[htmlLogo,sass,reactjs]},{title:'My portfolio',img:'portfolio.png',link:'https://pedrobslisboa.github.io/',content:"Dev and Designed by me, with MVC and Factory Partners",tools:[htmlLogo,css3Logo,jsLogo]},{title:'Mothers Days',img:'mothersday.jpg',link:'https://codepen.io/pedrobslisboa/full/xjPjLj/',content:"Dev and Designed by me for Mother's Day",tools:[htmlLogo,css3Logo,jsLogo]},{title:'Calculator Project',img:'calculator.png',link:'https://codepen.io/pedrobslisboa/full/OZLepg/',content:"Dev and Designed by me for a Free Code Camp Project",tools:[htmlLogo,css3Logo,jsLogo]},{title:'Pomodoro Timer',img:'Pomodoro_timer.jpg',link:'https://codepen.io/pedrobslisboa/full/jzQrde/',content:'Dev and Designed by me for a Free Code Camp Project',tools:[htmlLogo,css3Logo,jsLogo]},{title:'Quote Project',img:'Quote_Project.jpg',link:'https://codepen.io/pedrobslisboa/full/PRJBQJ/',content:"Dev and Designed by me for a Free Code Camp Project",tools:[htmlLogo,css3Logo,jsLogo,]},{title:'Tic Tac Toe Neon',img:'Tic_tac_toe.jpg',link:'https://codepen.io/pedrobslisboa/full/zWBgYg/',content:"Dev and Designed by me for fun",tools:[htmlLogo,css3Logo,jsLogo]}];

var controller =  new ProjectController();
for (var i = 0; i < projects.length; i++) {
  controller.add(projects[i].title,projects[i].img,projects[i].link,projects[i].content,projects[i].tools);
}

$( "form" ).submit(function(e){
  e.preventDefault();
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

$(document).ready(function(){
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
