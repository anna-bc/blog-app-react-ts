import { ThemeProvider } from "@emotion/react";
import { useReducer } from "react";
import "./App.scss";
import PostList from "./components/components/PostList/PostList";
import Header from "./components/container/Header/Header";
import PostCreateForm from "./components/container/PostCreateForm/PostCreateForm";
import { StateContext } from "./state/context/context";
import initialState from "./state/models/initialState";
import stateReducer from "./state/reducers/stateReducer";
import { MyTheme } from "./themeOptions";

function App() {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={MyTheme}>
        <div className="App">
          <Header />
          <PostCreateForm />
          <PostList posts={state.posts} />
        </div>
      </ThemeProvider>
    </StateContext.Provider>
  );
}

export default App;
