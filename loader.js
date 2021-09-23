(function () {
    "use strict";

    var bookmarkletSource = "bookmarklet.js";

    jQuery.get(bookmarkletSource, function (data) {
        $('a.js-bookmarklet-link').attr(
            'href'
            , 'javascript:' + encodeURI(data.replace(/HOST/, window.location.host))
        );
    }, "text");

    $('a.bookmark').on("click", function(event) {
        event.preventDefault();
        const $target = $("a.js-bookmarklet-link");
        console.log("dune it");
        var createBookmark = browser.bookmarks.create({
            title: $target.text(),
            url: $target.href
        });
        createBookmark.then(function (node) {
            console.log(node);
        });
    });
}());