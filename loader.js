(function () {
    "use strict";

    var bookmarkletSource = "bookmarklet.js";

    jQuery.get(bookmarkletSource, function (data) {
        var host = window.location.host;
        var path = window.location.pathname;
        path = path.substring(0, path.lastIndexOf('/')) || "";

        $('a.js-bookmarklet-link').attr(
            'href', 'javascript:' + encodeURI(data.replace(/HOST/, host + path))
        );
    }, "text");

    $('a.bookmark').on("click", function(event) {
        event.preventDefault();
    });
}());