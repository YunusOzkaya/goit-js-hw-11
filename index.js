import{a as m,S as p,i as l}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="50136749-dac3218f1634fe54e8a0614ce",h="https://pixabay.com/api/";async function g(i){const r={key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await m.get(h,{params:r})).data.hits}catch{throw new Error("Image fetch failed")}}let a;function b(){document.querySelector(".loader").classList.remove("hidden")}function d(){document.querySelector(".loader").classList.add("hidden")}function L(i){const r=i.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:n,comments:u,downloads:f})=>`
      <li class="gallery__item">
        <a class="photo-card" href="${s}">
          <img src="${o}" alt="${e}" />
          <div class="info">
            <p class="info-item"><b>Likes:</b> ${t}</p>
            <p class="info-item"><b>Views:</b> ${n}</p>
            <p class="info-item"><b>Comments:</b> ${u}</p>
            <p class="info-item"><b>Downloads:</b> ${f}</p>
          </div>
        </a>
      </li>`).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",r),a?a.refresh():a=new p(".gallery a")}function S(){document.querySelector(".gallery").innerHTML=""}const c=document.getElementById("search-form");document.querySelector(".gallery");c.addEventListener("submit",async i=>{i.preventDefault();const r=c.elements.query.value.trim(),o=c.querySelector("button");if(r){S(),b(),o.disabled=!0;try{const s=await g(r);if(d(),o.disabled=!1,s.length===0){l.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(s)}catch{d(),o.disabled=!1,l.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}}});
//# sourceMappingURL=index.js.map
