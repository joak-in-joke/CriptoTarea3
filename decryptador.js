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

    console.log(CryptoJS);


    var keyHex = CryptoJS.enc.Utf8.parse("clavepip");


    var decrypted = CryptoJS.DES.decrypt({
        ciphertext: CryptoJS.enc.Base64.parse(msj_enc)
    }, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });

    console.log( decrypted.toString(CryptoJS.enc.Utf8));
})();

