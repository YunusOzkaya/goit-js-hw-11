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
