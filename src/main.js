import { fetchImages } from './api.js';
import { renderGallery, clearGallery, refreshLightbox } from './gallery.js';
import { showLoader, hideLoader } from './loader.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.getElementById('search-form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = form.elements.query.value.trim();

  if (!query) return;

  clearGallery();
  showLoader();

  try {
    const images = await fetchImages(query);
    hideLoader();

    if (images.length === 0) {
      iziToast.info({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    renderGallery(images);
    refreshLightbox();
  } catch (error) {
    hideLoader();
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
  }
});
