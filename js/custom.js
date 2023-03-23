$(document).ready(function () {
    $(".slider").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1300,
      arrows: false,
         dots: false,
    });
    $(document).ready(function () {
      $(".menu1").click(function () {
        $('.mobile-menu').show('slide, right, 500');
        $('.overlay').show('slide, right, 500');
      });
      $(".close, .overlay").click(function () {
        $('.mobile-menu').hide('slide, right, 500');
        $('.overlay').hide('slide, right, 500');
      });
    });
  });