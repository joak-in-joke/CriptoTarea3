// ==UserScript==
// @name         Decryptador
// @namespace    http://tampermonkey.net/
// @version      0.8
// @description  Decifra el mensaje del index
// @author       Joaquin
// @match        https://joak-in-joke.github.io/CriptoTarea3/
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/enc-base64.min.js
// ==/UserScript==

(function decrypt() {
    'use strict';

    var msj_enc = document.getElementsByClassName("DES")[0].id;

    console.log(msj_enc);

    var decrypted = Crypto.DES.decrypt( msj_enc ,"clavepip");
    var d_msg = Crypto.dec.Base64.UTF8(decrypted);
    console.log(d_msg)
})();