const e=document.querySelector(".tank"),t=document.querySelector(".damage"),o=document.querySelector(".support");let r;const c=e=>{document.querySelector(`.${e}`);const t=document.querySelector(`.${e}-overlay`),o=document.querySelector(`.${e}list`),c=document.querySelector(`.${e}-title`);r=setTimeout((()=>{o.style.opacity="1",c.style.opacity="0",t.style.opacity="0.8"}),200)},u=e=>{document.querySelector(`.${e}`);const t=document.querySelector(`.${e}-overlay`),o=document.querySelector(`.${e}list`),c=document.querySelector(`.${e}-title`);clearTimeout(r),setTimeout((()=>{"1"===o.style.opacity&&(o.style.opacity="0",c.style.opacity="1",t.style.opacity="0")}),200)};e.addEventListener("mouseenter",(()=>{c("tank")})),t.addEventListener("mouseenter",(()=>{c("damage")})),o.addEventListener("mouseenter",(()=>{c("support")})),e.addEventListener("mouseleave",(()=>{u("tank")})),t.addEventListener("mouseleave",(()=>{u("damage")})),o.addEventListener("mouseleave",(()=>{u("support")}));
//# sourceMappingURL=index.522cf55d.js.map