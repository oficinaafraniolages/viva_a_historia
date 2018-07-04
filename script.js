$( document ).ready(function() {

  $(window).bind('hashchange',function(){
    hashCall();
  });

  function hashCall(){
    console.log(sessionStorage.getItem("last-url"));

    let location = document.location.hash.substring(1);
    switch (location.substring(0,2)){
      case 'g_':
        var link = "galerias/" + location.substring(2) + '.html';
        break;
      case 'v_':
        var link = "videos/" + location.substring(2) + '.html';
        break;
      case 'b_':
        var link = sessionStorage.getItem("last-url").substring(1)  + '.html';
      case '':
        var link = 'main_home.html';
        break;
      default:
        var link = location + '.html';
    }
    pageCall(link);
    sessionStorage.setItem("last-url", document.location.hash);
  }

  function pageCall(page){
    $.ajax({
      url: page,
      dataType: 'html',
      success: function(data) {
         $('main').html(data);
      },
      error: function() {
         pageCall('main_home.html')
       }
   });
  }

/*
  //  ajax trigger
  function trigger(){
    $('a').on('click', function(event){
      if ($(this).hasClass('main_link')){
        var page = $(this).attr('xlink:href').substring(1) + ".html";
        pageCall('default.html', 'body', page);
      } else {
        if($(this).attr('xlink:href')){
          switch ($(this).attr('xlink:href').substring(1,3)) {
              case 'g_':
                  var page = "galerias/" + $(this).attr('xlink:href').substring(3) + ".html";
                  break;
              default:
                  var page = $(this).attr('xlink:href').substring(1) + ".html";
          }
        } else {
          var page = $(this).attr('href').substring(1) + ".html";
        }
        console.log(page);
        pageCall(page, 'main');
      }
    });
  }

  trigger(); */

  hashCall();

  $('.intro').on('click', function(){
    $('.intro').fadeOut();
  });

});
