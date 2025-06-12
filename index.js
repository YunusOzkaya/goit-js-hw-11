import{S as m,i as c}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="50136749-dac3218f1634fe54e8a0614ce",y="https://pixabay.com/api/";async function h(n){const r=new URLSearchParams({key:p,q:n,image_type:"photo",orientation:"horizontal",safesearch:"true"});return(await(await fetch(`${y}?${r}`)).json()).hits}function g(){document.querySelector(".loader").classList.remove("hidden")}function l(){document.querySelector(".loader").classList.add("hidden")}let a;function L(n){const r=n.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:i,comments:f,downloads:d})=>`
      <li class="gallery__item">
        <a class="photo-card" href="${s}">
          <img src="${o}" alt="${e}" />
          <div class="info">
            <p class="info-item"><b>Likes:</b> ${t}</p>
            <p class="info-item"><b>Views:</b> ${i}</p>
            <p class="info-item"><b>Comments:</b> ${f}</p>
            <p class="info-item"><b>Downloads:</b> ${d}</p>
          </div>
        </a>
      </li>`).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",r),a||(a=new m(".gallery a"))}function b(){a==null||a.refresh()}function S(){document.querySelector(".gallery").innerHTML=""}const u=document.getElementById("search-form");document.querySelector(".gallery");u.addEventListener("submit",async n=>{n.preventDefault();const r=u.elements.query.value.trim();r&&(S(),g(),h(r).then(o=>{if(l(),o.length===0){c.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o),b()}).catch(o=>{l(),c.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}))});
//# sourceMappingURL=index.js.map
