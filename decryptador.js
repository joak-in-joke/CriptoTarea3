// ==UserScript==
// @name         Decryptador
// @namespace    http://tampermonkey.net/
// @version      0.8
// @description  Decifra el mensaje del index
// @author       Joaquin 
// @match        https://joak-in-joke.github.io/CriptoTarea3/
// @grant        none
// @require      https://raw.githubusercontent.com/cdnjs/cdnjs/master/ajax/libs/crypto-js/4.0.0/mode-ecb.js
// @require      https://raw.githubusercontent.com/cdnjs/cdnjs/master/ajax/libs/crypto-js/4.0.0/enc-base64.js
// @require      https://raw.githubusercontent.com/cdnjs/cdnjs/master/ajax/libs/crypto-js/4.0.0/crypto-js.js
// @require      https://raw.githubusercontent.com/cdnjs/cdnjs/master/ajax/libs/crypto-js/4.0.0/enc-utf8.js
// ==/UserScript==
(function decrypt() {
    'use strict';

    var msj_enc = document.getElementsByClassName("DES_ECB")[0].id;

    console.log(msj_enc);

    var decrypted = CryptoJS.DES.decrypt(msj_enc, "clavepip");
    var d_msg = decrypted.toString(CryptoJS.enc.Utf8);
    console.log(d_msg);
})();

