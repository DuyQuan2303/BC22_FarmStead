$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  $(function () {
    $(document).scroll(function () {
      var $a = $(".icon");
      $a.toggleClass('scrolled', $(this).scrollTop() > $a.height());
    });
  });