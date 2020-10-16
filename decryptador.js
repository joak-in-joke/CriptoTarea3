// ==UserScript==
// @name         Decryptador
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  Decifra el mensaje del index
// @author       Joaquin 
// @match        https://joak-in-joke.github.io/CriptoTarea3/
// @grant        none
// ==/UserScript==
(function decrypt() {
    'use strict';

    var msj_enc = document.getElementsByClassName("DES_ECB")[0].id;


    ('body').append('<div class="DECRYPT" id="HOLA-SOCIO"></div>')

})();

