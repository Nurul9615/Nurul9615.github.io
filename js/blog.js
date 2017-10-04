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

$("button").click(function() {
  $('html,body').animate({
    scrollTop: $(".masthead").offset().top},
    'slow');
});