// Reducers - take previous state and action to create new state
export default (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_ARTIST_SONGS':
      return {
        ...state,
        songs: action.songs
      }
    default:
      return state
  }
}