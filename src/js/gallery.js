import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';



const API_KEY = '50136749-dac3218f1634fe54e8a0614ce';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const response = await fetch(`${BASE_URL}?${params}`);
  const data = await response.json();
  return data.hits;
}



let lightbox;

export function renderGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <a class="photo-card gallery__item" href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" />
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${likes}</p>
          <p class="info-item"><b>Views:</b> ${views}</p>
          <p class="info-item"><b>Comments:</b> ${comments}</p>
          <p class="info-item"><b>Downloads:</b> ${downloads}</p>
        </div>
      </a>`
    )
    .join('');

  document.querySelector('.gallery').insertAdjacentHTML('beforeend', markup);

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a');
  }
}



export function refreshLightbox() {
  lightbox?.refresh();
}

export function clearGallery() {
  document.querySelector('.gallery').innerHTML = '';
}
