!function(){"use strict";function e(o){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(o)}var o=null,n=!1;function t(){return o=null!==o?o:function(){function e(){n||(console.log("Open nav"),n=!0)}function o(){n&&(console.log("Close nav"),n=!1)}return{isActive:function(){return n},open:e,close:o,toggle:function(){n?o():e()}}}()}var l=Object.freeze({__proto__:null,nav:function(){var e=document.getElementById("hamburgerToggle"),o=document.getElementById("handheld-nav"),n=t(),l=document.body.style.overflow;e.addEventListener("click",(function(t){t.preventDefault(),n.toggle(),e.classList.toggle("is-active"),o.classList.toggle("is-visible"),document.body.style.overflow=n.isActive()?"hidden":l}))}});"object"===("undefined"==typeof module?"undefined":e(module))&&module.hot&&module.hot.accept();var u=function(){var e={modules:{}};return Object.keys(l).forEach((function(o){e.modules[o]=l[o](e)})),e}();window.App=u}();
