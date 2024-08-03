const APP_VERSION = '1.0.9';

$(function() {
    initLanguage();
    initVersionDebug();

    $('.cards-container').addClass('loaded');

    $(".mobile-menu-toggle").on("click",function() {
        $(".mobile-menu-container").toggleClass("active");
    });

    // select handler
    $(".lang-selector > a").on("click",function() {
        changeLanguage($(this).attr('data-lang'));
    });

    $(".dropdown").on("click",function() {
        var dropdownContent = $(this).next();
        dropdownContent.show();
    });

    $(document).on("click",function(e) {
        if (!$(e.target).closest(".dropdown").length) {
            $(".dropdown-content").hide();
        }
    });
})

function initVersionDebug() {
    var clicks = 0;
    $(".debug-btn").on("click", function() {
        clicks++;
        if (clicks == 5) {
            $(".debug").html('App version: ' + APP_VERSION);
            console.log('App version: ' + APP_VERSION);
            clicks = 0;
        }
    });
}

function initLanguage() {
    // detect initial browser language
    //TODO
    changeLanguage('en');
}

function changeLanguage(languageCode) {
    $.getJSON('./assets/messages.json', function(data) {
        //Get the messages for the language code
        var messages = data[languageCode];
        //Iterate over each message
        for (var key in messages) {
            //Get the element by id and set the innerHTML to the message
            $(".lang").each(function() {
                if ($(this).attr('data-message') == key) {
                    $(this).html(messages[key]);
                }
            });
        }
    });
}