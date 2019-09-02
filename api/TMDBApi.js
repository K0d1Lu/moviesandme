import getEnvVars from '../environment';
const { APIKEY, apiBaseUrl, language } = getEnvVars();

export function getFilmSearch(chars, page) {
  const url = `${apiBaseUrl}3/search/movie?api_key=${APIKEY}&language=${language}&query=${chars}&page=${page}`;

  return fetch(url)
    .then( response => response.json())
    .catch( e => console.error)
}

export function getFilmDetails(id) {
  const url = `${apiBaseUrl}3/movie/${id}?api_key=${APIKEY}&language=${language}`
  return fetch(url)
    .then( response => response.json())
    .catch( e => console.error);
}

export function getImageFromApi (img) {
  return `https://image.tmdb.org/t/p/w300${img}`
}