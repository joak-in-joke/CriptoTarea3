// ==UserScript==
// @name         Decryptador
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Decifra el mensaje del index
// @author       Joaquin 
// @match        https://joak-in-joke.github.io/CriptoTarea3/
// @grant        none
// ==/UserScript==

(document).ready(function() {
    var msj_enc = document.getElementsByClassName("DES_ECB")[0].id
    });

    ('body').append('<div class="DECRYPT" id="HOLA-SOCIO"></div>')