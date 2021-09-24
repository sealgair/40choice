(function () {
    "use strict";

    var url = "//" + "HOST" + "/signup.js";
    var js = document.createElement('script');
    js.addEventListener('load', function () {
        console.log("loaded the real deal");
    });

    js.src = url;
    document.head.appendChild(js);
}());