import React, { useCallback, useContext, useReducer } from "react";
import "./App.css";
import PostList from "./components/components/PostList/PostList";
import { StateContext } from "./state/context/context";
import initialState from "./state/models/initialState";
import stateReducer from "./state/reducers/stateReducer";

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <PostList posts={state.posts}/>
      </div>
    </StateContext.Provider>
  );
}

export default App;
