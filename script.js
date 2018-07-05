$( document ).ready(function() {

  $(window).bind('hashchange',function(){
    hashCall();
  });

  function hashCall(){
    let location = document.location.hash.substring(1);
    switch (location.substring(0,2)){
      case 'b_':
        var para = true;
        window.history.back();window.history.back();
        break;
      case 'g_':
        var link = "galerias/" + location.substring(2) + '.html';
        break;
      case 'v_':
        var link = "videos/" + location.substring(2) + '.html';
        break;
      case 't_':
        var link = "textos/" + location.substring(2) + '.html';
        break;
      case 'a_':
        var link = "audios/" + location.substring(2) + '.html';
        break;
      case '':
        var link = 'main_home.html';
        break;
      default:
        var link = location + '.html';
    }
    if(!para){ pageCall(link); }
  }

  function pageCall(page){
    $.ajax({
      url: page,
      dataType: 'html',
      success: function(data) {
         $('main').html(data);
         toggleMute();
      },
      error: function() {
         pageCall('main_home.html')
       }
   });
  }

  function toggleMute(){
      $('.mute').on('click', function(){
        console.log('clicou');
        $('audio').prop('muted', !$('audio').prop('muted'));
      });
  }

  if(window.location.hash) { $('.intro').fadeOut(); hashCall();} //sem intro de eu ja for pra um pagina

  $('.intro').on('click', function(){
    pageCall('main_home.html')
    $('.intro').fadeOut();
  });

});
