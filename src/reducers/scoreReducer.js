export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREASE_SCORE':
      return {
        score: state + 1
      }
    default:
      return state
  }
}