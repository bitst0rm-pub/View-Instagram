// ==UserScript==
// @name         View Instagram without login
// @namespace    vinstagram
// @version      0.0.1
// @description  View Instagram without login via imginn.com
// @author       bitst0rm
// @updateURL    https://github.com/bitst0rm-pub/View-Instagram/raw/master/vinstagram.user.js
// @downloadURL  https://github.com/bitst0rm-pub/View-Instagram/raw/master/vinstagram.user.js
// @match        https://www.instagram.com/*
// @match        http://www.instagram.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function go() {
        var p = window.location.pathname.split("/");
        if (/^((?!(accounts|developer|about|legal|explore|directory|stories)).)*$/.test(p[1]) && p.length > 2 && p[1] !== "p") {
            var lang = "en";
            var html = document.querySelector("html");
            if (html && html.hasAttribute("lang")) {
                lang = html.getAttribute("lang") || "en";
            }
            window.location.replace("https://imginn.com/" + p[1] + "/?lang=" + lang);
        }
    }

    (function (old) {
        window.history.pushState = function () {
            old.apply(window.history, arguments);
            go();
        }
    })(window.history.pushState);

    go();
})();
