const e=document.querySelector("body"),t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");let a=null;d.disabled="false",t.addEventListener("click",(()=>{t.disabled="true",d.removeAttribute("disabled","disabled"),a=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),d.addEventListener("click",(()=>{t.disabled="false",d.disabled="true",clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.e5f2bc6c.js.map
