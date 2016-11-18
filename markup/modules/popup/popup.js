$(function(){
  $('.popup__wrapper').click(function(e){
    if (!$(e.target).closest('.popup').length!==0) {
      $(this).fadeOut();

    }
  });
  $('.popup__order').click(function(e){
    e.preventDefault();
    $(this).parents('.popup__wrapper').fadeOut();
    $('.popup__wrapper_thanks').fadeIn();
  });
});
