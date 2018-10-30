// Reducers - take previous state and action to create new state

export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_ARTIST':
      return {
        artist: action.artist
      }
    case 'LOAD_ARTIST':
      return {
        ...state,
        artist: action.artist
      }
    default:
      return state
  }
}