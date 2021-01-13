var t1 = new TimelineMax({paused: true});

t1.to(".menu", 1, {
    left: "0%",
    ease: Expo.easeInOut,
    delay: -0.5
});

t1.staggerFrom(".menu ul li", 1, {x: -200, opacity: 0, ease:Expo.easeOut}, 0.2);

t1.reverse();
$(document).on("click", ".header-nav-link", function() {
 t1.reversed(!t1.reversed());
}); 

$(".menu-prop").on("click", function() {
    var el = $(this);
    if (el.text() == el.data("text-swap")) {
      el.text(el.data("text-original"));
    } else {
      el.data("text-original", el.text());
      el.text(el.data("text-swap"));
    }
  });

$(".header-nav-link").click(function() {
    $('.logo-white-active').toggleClass('passive');
    $('.passive').toggleClass('logo-black-active');
    $('.body-in').toggleClass('body-no-scroll');
  });

$('#user_button').toggle(function () {
    $("#user_button").addClass("active");
}, function () {
    $("#user_button").removeClass("active");
});
$(".header-nav-link").click(function() {
    $('.cursor').toggleClass('cursor-black');
  });  

  $(document).ready(function() {
    $('.menu-items-other').hover(
        function() { // handler in
          $('.navbar-images').css('opacity', 1);
          // Additional actions (display info, etc.)
        }, function() { // handler out
          $('.navbar-images').css('opacity', 0);
          // Additional actions (hide info, etc.)
        }
    );
  })

  $(document).ready(function() {
    $('.menu-items-first').hover(
        function() { // handler in
          $('.navbar-images').css('opacity', 1);
          // Additional actions (display info, etc.)
        }, function() { // handler out
          $('.navbar-images').css('opacity', 0);
          // Additional actions (hide info, etc.)
        }
    );
  })
  



  // Fade Animation //

  
// $('.handle').attr('style','left: 300px');, to edit style attribute //


