$(window).on('scroll', function(){
    if($(window).scrollTop()) {
        $('.navbar').addClass('transparent');
    } else {
        $('.navbar').removeClass('transparent');
    }
})

$('.handle').on('click', function(){
    $('nav ul').toggleClass('showing');
})

//Image slider for Looplap projects page
var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
    
// Image List
images[0] = "img/looplab1.png";
images[1] = "img/looplab2.png";
images[2] = "img/looplab3.png";
images[3] = "img/looplab4.png";

// Change Image
function changeImg(){
    document.slide.src = images[i];

    // Check If Index Is Under Max
    if(i < images.length - 1){
    // Add 1 to Index
    i++; 
    } else { 
        // Reset Back To O
        i = 0;
    }

    // Run function every x seconds
    setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;