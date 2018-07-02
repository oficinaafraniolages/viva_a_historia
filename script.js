$('.trigger').on('click', function(){
  if($('.menu').hasClass('hide')) {
    $('.menu').removeClass('hide');
  } else {
    $('.menu').addClass('hide');
  }
});
