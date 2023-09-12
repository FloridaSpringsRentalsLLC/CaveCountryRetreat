$(document).ready(function() {
    // Open the Mobile Menu
    $('#mobile_menu_open_btn').click(function() {
        $('body').addClass('is-mobile-overlay-active');
    });

    // Close the Mobile Menu
    $('#mobile_menu_close_btn').click(function() {
        $('body').removeClass('is-mobile-overlay-active');
    });
});