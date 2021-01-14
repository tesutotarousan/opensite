$(function () {

  // pagetopスクロール
  var pageTop = $("#scroll_top");
  pageTop.click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 200) {
      pageTop.css("bottom", "30px");
    } else {
      pageTop.css("bottom", "-85px");
    }
  });

  //page内スクロール
  // #で始まるアンカーをクリックした場合に処理
  $('a[href^="#"]').click(function() {
    // スクロールの速度
    var speed = 400; // ミリ秒で記述
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });

});
