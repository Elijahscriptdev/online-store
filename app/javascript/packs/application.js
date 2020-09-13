// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
// import 'bootstrap'
import 'materialize-css/dist/js/materialize';
import '../stylesheets/application';
import "@fortawesome/fontawesome-free/js/all";

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
console.log('Hello from application.js')
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

$(document).on('turbolinks:load', function(){
    $(".dropdown-trigger").dropdown();

    $(document).jQuery(function() {
        $('.sidenav').sidenav();
    });

    $('#fade-out-target').fadeOut(4000);
    $('#fade-out-target1').fadeOut(8000);

    $(document).jQuery(function(){
    $('.parallax').parallax();
  });
})



// $(document).on('turbolinks:load', function () {

// });
// document.getElementById("fa-bars").addEventListener('click', () => {
    
//     console.log("deleteBook");
// });

// function myFunction() {
//     // document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
//     console.log("yes");
// }
// myFunction()
// $(document).ready(function () {
// jQuery(function ($) {

//     $(".fa-bars").on("click", function () {
//         $(".me").addClass("open");
//     });
//     $(".fa-times").on("click", function () {
//         $(".me").removeClass("open");
//     });

//     // $('.nav-link').click(function () {
//     //     location.reload();
//     // });

//     // $("#btnFadeOut").click(function () {
//     //     $('body').addClass('animated fadeOut')
//     // });

//     // $("#btnHinge").click(function () {
//     //     $('body').addClass('animated hinge')
//     // });

// });

// jQuery(function ($) {

//     // Function which adds the 'animated' class to any '.animatable' in view
//     var doAnimations = function () {

//         // Calc current offset and get all animatables
//         var offset = $(window).scrollTop() + $(window).height(),
//             $animatables = $('.animatable');

//         // Unbind scroll handler if we have no animatables
//         if ($animatables.length == 0) {
//             $(window).off('scroll', doAnimations);
//         }

//         // Check all animatables and animate them if necessary
//         $animatables.each(function (i) {
//             var $animatable = $(this);
//             if (($animatable.offset().top + $animatable.height() - 20) < offset) {
//                 $animatable.removeClass('animatable').addClass('animated');
//             }
//         });

//     };

//     // Hook doAnimations on scroll, and trigger a scroll
//     $(window).on('scroll', doAnimations);
//     $(window).trigger('scroll');


// });
