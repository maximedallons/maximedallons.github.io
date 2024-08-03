const BASE_URL = 'https://maximedallons.github.io';

$(function() {
    initLanguage();

    $('.cards-container').addClass('loaded');

    $(".mobile-menu-toggle").click(function() {
        $(".mobile-menu-container").toggleClass("active");
    });

    // select handler
    $(".lang-selector > a").click(function() {
        changeLanguage($(this).attr('data-lang'));
    });
})

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