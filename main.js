//TRANSPARENT NAVBAR ON SCROLL
$(window).on('scroll', function(){
    if($(window).scrollTop()) {
        $('.navbar').addClass('transparent');
    } else {
        $('.navbar').removeClass('transparent');
    }
})

// TOGGLE MENU FOR MOBILE DEVICES
$('.handle').on('click', function(){
    $('nav ul').toggleClass('showing');
})

// JAVASCRIPT APP
$(".sidearea > a").siblings().hide(); //INTIALLY HIDDEN

$(".sidearea > a").click(function(){

  $(".sidearea > a").siblings().toggle();
  $(this).toggleClass("open");

  if($(this).hasClass("open")){
    $(".sidearea").animate({
      width:"40%"
    },1000, function(){
      $(".sidearea > a").text("Close");
    })
  } else {
    $(".sidearea").animate({
      width:"12%"
    },1000, function(){
      $(".sidearea > a").text("Open");
    })
  }
})

$('.back1').css('background-image', 'url(img/back1.jpg)');
$('.back2').css('background-image', 'url(img/back2.jpg)');
$('.back3').css('background-image', 'url(img/back3.jpg)');
$('.back4').css('background-image', 'url(img/back4.jpg)');

$('.newbackground > div').click(function(){
  $(this).toggleClass('addBorder');
  $(this).siblings().removeClass('addBorder');
})

$(".updatebtn").click(function(){
  var newintro = $("#intro").val();
  var newintrocolor = $("#intro-color").val();

  var newsubintro = $("#sub-intro").val();
  var newsubintrocolor = $("#sub-intro-color").val();

  $("#hero > h1").text(newintro);
  $("#hero > h1").css("color",newintrocolor);

  $('#hero > p').text(newsubintro);
  $("#hero > p").css("color",newsubintrocolor);

  if($('.back1').hasClass('addBorder')){
    $('#hero').css("background-image", "url(img/back1.jpg)");
  } else if($('.back2').hasClass('addBorder')){
    $('#hero').css("background-image", "url(img/back2.jpg)");
  } else if($('.back3').hasClass('addBorder')){
    $('#hero').css("background-image", "url(img/back3.jpg)");
  } else {
    $('#hero').css("background-image", "url(img/back4.jpg)");
  }
});

// SMOOTH SCROLLING
$(document).ready(function(){
    $(".burger").click(function(){
        $(this).toggleClass('is-active');
        $("#mobile-menu").slideToggle();
    })
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });