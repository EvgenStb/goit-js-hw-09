!function(){var e=document.querySelector("body"),t=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]"),d=null;a.disabled="false",t.addEventListener("click",(function(){t.disabled="true",a.removeAttribute("disabled","disabled"),d=setInterval((function(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),a.addEventListener("click",(function(){t.disabled="false",a.disabled="true",clearInterval(d)}))}();
//# sourceMappingURL=01-color-switcher.c444f941.js.map