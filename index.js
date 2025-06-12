import{a as m,S as p,i as c}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const h="50136749-dac3218f1634fe54e8a0614ce",y="https://pixabay.com/api/";async function g(s){const t={key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await m.get(y,{params:t})).data.hits}catch{throw new Error("Image fetch failed")}}let n;function L(){document.querySelector(".loader").classList.remove("hidden")}function l(){document.querySelector(".loader").classList.add("hidden")}function b(s){const t=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:r,views:i,comments:u,downloads:d})=>`
      <li class="gallery__item">
        <a class="photo-card" href="${a}">
          <img src="${o}" alt="${e}" />
          <div class="info">
            <p class="info-item"><b>Likes:</b> ${r}</p>
            <p class="info-item"><b>Views:</b> ${i}</p>
            <p class="info-item"><b>Comments:</b> ${u}</p>
            <p class="info-item"><b>Downloads:</b> ${d}</p>
          </div>
        </a>
      </li>`).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",t),n?n.refresh():n=new p(".gallery a")}function S(){document.querySelector(".gallery").innerHTML=""}function q(){n==null||n.refresh()}const f=document.getElementById("search-form");document.querySelector(".gallery");f.addEventListener("submit",async s=>{s.preventDefault();const t=f.elements.query.value.trim();t&&(S(),L(),g(t).then(o=>{if(l(),o.length===0){c.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o),q()}).catch(o=>{l(),c.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}))});
//# sourceMappingURL=index.js.map
