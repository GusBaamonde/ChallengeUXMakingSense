$(document).ready(function() {
  var $item1 = $('#item__one'),
    $item2 = $('#item__two');


  $('#button__one, #dot__current1').click(function() {
    if (!$item1.hasClass('active')) {
      $item2.fadeOut(500, function() {
        $item1.css("display", "flex")
          .hide()
          .fadeIn(500);

      });
      $item2.removeClass('active');
      $item1.addClass('active');
      $('#button__two').removeClass('current');
      $('#button__one').addClass('current');
      $('#dot__current2').removeClass('dot__item--current');
      $('#dot__current1').addClass('dot__item--current');
    }
  });

  $('#button__two, #dot__current2').click(function() {
    if (!$item2.hasClass('active')) {
      $item1.fadeOut(500, function() {
        $item2.css("display", "flex")
          .hide()
          .fadeIn(500);
      });
      $item1.removeClass('active');
      $item2.addClass('active');
      $('#button__one').removeClass('current');
      $('#button__two').addClass('current');
      $('#dot__current1').removeClass('dot__item--current');
      $('#dot__current2').addClass('dot__item--current');
    }
  }); 

  $("#btn__detail1, #btn__detail2").click(function(){
    $("#modal__show").fadeIn(500);
    $(".main").addClass("blur");
  });

  $("#modal__show .close").click(function(){
    $(".main").removeClass("blur");
    $("#modal__show").fadeOut();
  });

  $.sharedCount(location.href, function(data){
      $("#facebook").text(data.Facebook.total_count);
      $("#pinterest").text(data.Pinterest);
  });

});

jQuery.sharedCount = function(url, fn) {
    //url = encodeURIComponent(url || location.href);
  url = encodeURIComponent('https://makingsense.com/');
      var domain = "https://api.sharedcount.com/v1.0/";
      var apikey = "339fbce9a8de4f7f2add739bb31664e6d484159b"
      var arg = {
        data: {
          url : url,
          apikey : apikey
        },
          url: domain,
          cache: true,
          dataType: "json"
      };
      if ('withCredentials' in new XMLHttpRequest) {
          arg.success = fn;
      }
      else {
          var cb = "sc_" + url.replace(/\W/g, '');
          window[cb] = fn;
          arg.jsonpCallback = cb;
          arg.dataType += "p";
      }
      return jQuery.ajax(arg);
  };
