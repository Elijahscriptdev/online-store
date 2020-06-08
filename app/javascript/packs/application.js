// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
import 'bootstrap'
import "@fortawesome/fontawesome-free/js/all";
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)



// $(document).on('turbolinks:load', function () {

// });


$(document).ready(function () {

    $(".fa-bars").click(function () {
        $(".me").addClass("open");
    });
    $(".fa-times").click(function () {
        $(".me").removeClass("open");
    });

    // $('.nav-link').click(function () {
    //     location.reload();
    // });

    $("#btnFadeOut").click(function () {
        $('body').addClass('animated fadeOut')
    });

    $("#btnHinge").click(function () {
        $('body').addClass('animated hinge')
    });

});