$(document).ready(function() {
  'use strict';

  RequestLoader(loadList, false).load();

  if (navigation) {
    loadDocumentNavigation(navigation);
  }


  $('#logo-img').attr('src', RELATIVE_PATH + 'images/logo.png');

  var galleryLayout = function() {
    var height = $(window).height();
    var padding = 150;
    var $gallery = $('#gallery');
    var $content3 = $('#content3');
    $gallery.height(height);
    $gallery.css('padding-top', padding+'px');
    $content3.height(height);
    $content3.css('padding-top', padding+150+'px');
  };

  function loadDocumentNavigation(list) {
    var url = window.location.href;
    var filename = url.match(".+/([^\?#;/]+).*$")[1];
    var $element = $('#document-nav');
    for (var i = 0, len = list.length; i < len; i++) {
      var text = '<li><a href="'+ list[i].url +'">'+ list[i].name +'</a>';
      $element.append(text);
      console.log(filename, list[i].url);
      if (filename == list[i].url) {
        $('#dtm-subject').html(list[i].name);
        $('#dtm-title').html(list[i].name);
      }
    }
  }
});