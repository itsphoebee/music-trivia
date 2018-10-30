export default (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_QUESTION':
      return {
        question: action.question
      }
    default:
      return state
  }
}