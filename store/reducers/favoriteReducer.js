
const initialState = { favoritesFilms: [] }

export default function toggleFavorite(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const id = action.value.id;
      if (!state.favoritesFilms.find(i => i.id === id)) {
        nextState = {
          ...state,
          favoritesFilms: [...state.favoritesFilms, action.value]
        }
      } else {
        nextState = {
          ...state,
          favoritesFilms: state.favoritesFilms.filter(i => i.id !== id)
        }
      }

      return nextState || state;
    default:
      return state
  }
}

