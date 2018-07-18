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

var projects = [{title:'My portfolio',img:'portfolio.png',link:'https://codepen.io/pedrobslisboa/full/JvzYMo',content:"Dev and Designed by me, with MVC and Factory Partners",tools:[htmlLogo,css3Logo,jsLogo]},{title:'Mothers Days',img:'mothersday.jpg',link:'https://codepen.io/pedrobslisboa/full/JvzYMo',content:"Dev and Designed by me for Mother's Day",tools:[htmlLogo,css3Logo,jsLogo]},{title:'Calculator Project',img:'calculator.png',link:'https://codepen.io/pedrobslisboa/full/JvzYMo',content:"Dev and Designed by me for a Free Code Camp Project",tools:[htmlLogo,css3Logo,jsLogo]},{title:'Pomodoro Timer',img:'Pomodoro_timer.jpg',link:'https://codepen.io/pedrobslisboa/full/JvzYMo',content:'Dev and Designed by me for a Free Code Camp Project',tools:[htmlLogo,css3Logo,jsLogo]},{title:'Quote Project',img:'Quote_Project.jpg',link:'https://codepen.io/pedrobslisboa/full/JvzYMo',content:"Dev and Designed by me for a Free Code Camp Project",tools:[htmlLogo,css3Logo,jsLogo]},{title:'Tic Tac Toe Neon',img:'Tic_tac_toe.jpg',link:'https://codepen.io/pedrobslisboa/full/JvzYMo',content:"Dev and Designed by me for fun",tools:[htmlLogo,css3Logo,jsLogo]}];

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
