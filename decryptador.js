// ==UserScript==
// @name         Decryptador
// @namespace    http://tampermonkey.net/
// @version      0.8
// @description  Decifra el mensaje del index
// @author       Joaquin
// @match        https://joak-in-joke.github.io/CriptoTarea3/
// @grant        none
// @require      https://raw.githubusercontent.com/ibrahimelaradi/DES/master/DES/DES.js
// ==/UserScript==

(function decrypt() {
    'use strict';

    var msj_enc = document.getElementsByClassName("DES_ECB")[0].id;

    console.log(msj_enc);

    var decrypted = DES.encrypt( "clavepip", msj_enc);
    var d_msg = decrypted.toString(CryptoJS.enc.Utf8);
    console.log(d_msg);
})();