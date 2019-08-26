import getEnvVars from '../environment';
const { APIKEY, apiBaseUrl } = getEnvVars();

export function getFilmSearch(chars, page) {
    const url = `${apiBaseUrl}3/search/movie?api_key=${APIKEY}&language=fr&query=${chars}&page=${page}`;

    return fetch(url)
        .then( response => response.json())
        .catch(e => console.error)
}

export function getImageFromApi (img) {
    return `https://image.tmdb.org/t/p/w300${img}`
  }