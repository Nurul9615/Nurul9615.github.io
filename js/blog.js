(function($) {
  "use strict"; // Start of use strict

  // Show the navbar when the page is scrolled up
  var MQL = 1170;

  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
    var headerHeight = $('#mainNav').height();
    $(window).on('scroll', {
        previousTop: 0
      },
      function() {
        var currentTop = $(window).scrollTop();
        //check if user is scrolling up
        if (currentTop < this.previousTop) {
          //if scrolling up...
          if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
            $('#mainNav').addClass('is-visible');
          } 
          else {
            $('#mainNav').removeClass('is-visible is-fixed');
          }
        } 
        else if (currentTop > this.previousTop) {
          //if scrolling down...
          $('#mainNav').removeClass('is-visible');
          if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
        }
        this.previousTop = currentTop;
      });
  }

})(jQuery); // End of use strict

// Smooth scroll when clicking a project link
$(document).ready(function(){
  $('a').on('click', function(){
    var getAName = $(this).attr('href').split('#');
    $('html, body').animate({scrollTop: $('a[name='+getAName[1]+']').offset().top},1000);
  })
})

// Button to scroll to top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollBtn").style.display = "block";    
  }
  else {
    document.getElementById("scrollBtn").style.display = "none";
  }
}

// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

$("button").click(function() {
  $('html,body').animate({
    scrollTop: $(".masthead").offset().top},
    'slow');
});