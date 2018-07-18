class ProjectHelper {

  static outCard(){
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
  static hoverCard(){
    $(this).children('.card-image').stop().animate({
      top: '-2em'
    });
  }
  static hoverSocial(){

      $(this).children().css({

      fill:'#2196F3',

    });
  }
  static outSocial(){

      $(this).children().css({

      fill:'black',

    });
  }
  static hoverInfo(){

    let infoThis = $(this);
    let cardImageThis = infoThis.parents('.card').children('.card-image');
    let cardImageHeight = infoThis.parents('.card').width();
    let infoCardHeight = cardImageHeight - infoThis.parents('.card').children('.info-card').position().top;
   console.log(cardImageHeight);

    $(this).children('.info-off').css({
      display:'none'
    });
    $(this).children('.info-on').css({
      display:'block'
    });

    cardImageThis.animate({

      top: -infoCardHeight + 'px'

    });

  }

  static events(element){
    $('.card').hover(this.hoverCard,this.outCard);
    $('.social').hover(this.hoverSocial,this.outSocial);
    $('.info').click(this.hoverInfo);
  }
}
