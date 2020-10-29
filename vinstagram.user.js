// ==UserScript==
// @name         View Instagram Without Login
// @namespace    bitst0rm
// @version      0.0.3
// @description  View Instagram without login via imginn.com
// @author       bitst0rm
// @license      WTFPL
// @updateURL    https://github.com/bitst0rm-pub/View-Instagram/raw/master/vinstagram.user.js
// @downloadURL  https://github.com/bitst0rm-pub/View-Instagram/raw/master/vinstagram.user.js
// @icon         https://github.com/bitst0rm-pub/View-Instagram/raw/master/logo.png
// @match        https://www.instagram.com/*
// @match        http://www.instagram.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if (window.document.cookie.indexOf("ds_user_id") == -1) {
        var go = function() {
            var p = window.location.pathname.split("/");
            if (/^((?!(accounts|developer|about|legal|explore|directory|stories)).)*$/.test(p[1]) && p.length > 2 && p[1] !== "p") {
                window.location.replace("https://imginn.com/" + p[1] + "/?lang=" + window.navigator.languages[0].split("-")[0]);
            }
        }

        (function(old) {
            window.history.pushState = function() {
                old.apply(window.history, arguments);
                go();
            };
        })(window.history.pushState);

        go();
    }
})();
