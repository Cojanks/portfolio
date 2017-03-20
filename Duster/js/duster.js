
// Adding smooth scroll to Bootstraps scrollspy. Found at http://stackoverflow.com/questions/14804941/how-to-add-smooth-scrolling-to-bootstraps-scroll-spy-function
$("#bs-example-navbar-collapse-1 ul li a[href^='#']").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top -50
     }, 200, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

$(".navbar-brand").on('click', function(e) {

   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(hash).offset().top -100 
     }, 200, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});
