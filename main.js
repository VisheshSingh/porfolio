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
$(".sidearea a").click(function(){

  $(this).toggleClass("open");

  if($(this).hasClass("open")){
    $(".sidearea").animate({
      width:"40%"
    },1000, function(){
      $(".sidearea a").text("Close");
    })
  } else {
    $(".sidearea").animate({
      width:"12%"
    },1000, function(){
      $(".sidearea a").text("Open");
    })
  }
})

// SMOOTH SCROLLING
$(document).ready(function(){
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