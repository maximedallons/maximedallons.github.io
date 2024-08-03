$(function() {
    $(".mobile-menu-toggle").click(function() {
        $(".mobile-menu-container").toggleClass("active");
    });

    resetHeight();
    $(window).resize(function() {
        resetHeight();
    });
})

function resetHeight() {
    var height = $(window).height();
    $("main").css("height", height);
}