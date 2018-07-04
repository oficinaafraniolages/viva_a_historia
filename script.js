$( document ).ready(function() {

  function pageCall(page, div, extra){
    $.ajax({
      url: page,
      dataType: 'html',
      success: function(data) {
         $(div).html(data);
      },
      error: function() {
         $('#notification-bar').text('An error occurred');
      },
      complete: function(){
        if(extra){
          pageCall(extra, 'main');
        }
        trigger();
      }
   });
  }

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

  trigger();

});
