// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://meet.google.com/rwy-cafc-zus
// @match        https://meet.google.com/yaf-untz-smm
// @match        https://meet.google.com/jnr-zmjz-uko
// @match        https://meet.google.com/duz-vzzh-rso
// @match        https://meet.google.com/edt-kaag-azn
// @match        https://meet.google.com/gov-hpkt-xgq
// @grant        none
// ==/UserScript==

(function() {
    var x = document.getElementsByClassName("RveJvd snByac");
    var fun = ()=>{
        x[4].click();
        x[0].click();
    }
    setTimeout(fun,5000);

    var fun2 = ()=>{
     var z = document.getElementsByClassName("U26fgb JRY2Pb mUbCce kpROve GaONte Qwoy0d ZPasfd vzpHY");
     z[0].click();
    }
    setTimeout(fun2,3300000);
})();
