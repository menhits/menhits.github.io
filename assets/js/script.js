jQuery(document).ready(function(){

    // Scroll ke tujuan
    $('a[data-slide="slide"]').click(function(e){
        e.preventDefault();
        var target = $(this).data('slide-target');
        $("html, body").animate({
            scrollTop: $(target).offset().top - 80
        }, 1200);
    });

    function hasScrolled() {
        var navbar = $(".head-nav");
        if (window.scrollY > 100) {
            navbar.addClass('scrolled');
        }else {
            navbar.removeClass('scrolled');
        }
    }

    $(window).scroll(function() {
        hasScrolled();
    });

    $(window).resize(function() {
        hasScrolled();
    });

    hasScrolled();

    AOS.init({
      duration: 700,
    })

});

$(function(){
    $(window).scroll(function(){
        $(this).scrollTop()>100 ? $(".backtotop").fadeIn() : $(".backtotop").fadeOut()
    }),
    $(".backtotop").click(function(){
        return $("html,body").animate({scrollTop:0},800),!1})
});


// Function Tabs
function openTabs(evt, cityName) {

    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
} 

document.getElementById("defaultOpen").click();

// Slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-slide", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active-slide";
}