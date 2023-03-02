import Actions from "../Actions/Actions";

function stateReducer(state, action) {
  switch (action.type) {
    case Actions.addPost:
      return { ...state, posts: [...state.posts, action.payload.post] };

    default:
      return state;
  }
}

export default stateReducer;
