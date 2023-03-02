import { useReducer } from "react";
import "./App.css";
import PostList from "./components/components/PostList/PostList";
import PostCreateForm from "./components/container/PostCreateForm/PostCreateForm";
import { StateContext } from "./state/context/context";
import initialState from "./state/models/initialState";
import stateReducer from "./state/reducers/stateReducer";

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <PostCreateForm />  
        <PostList posts={state.posts}/>
      </div>
    </StateContext.Provider>
  );
}

export default App;
