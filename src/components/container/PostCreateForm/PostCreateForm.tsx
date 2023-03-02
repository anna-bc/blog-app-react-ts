import { SyntheticEvent, useContext, useRef, useState } from "react";
import uuid from "react-uuid";
import { Post } from "../../../models/PostModel";
import Actions from "../../../state/Actions/Actions";
import { StateContext } from "../../../state/context/context";

function PostCreateForm() {
  const { state, dispatch } = useContext(StateContext);
  let post : Post = {
    id: "",
    thumbnailUrl: "",
    title: "",
    content: "",
    creationDate: "",
    author: "",
    tags: [],
  };

  async function handleSubmitClick(e: SyntheticEvent) {
    e.preventDefault();

    let createdId: string = uuid();
    let today: Date = new Date();
    let date: string = today.toLocaleDateString("de-DE", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    console.log(date);
    post = { ...post, id: createdId, creationDate: date};
    dispatch({ type: Actions.addPost, payload: { post: post } });
  }

  return (
    <div className="PostCreateForm">
      <form className="PostCreateForm__form" onSubmit={handleSubmitClick}>
        <input
          type="text"
          placeholder="Write a title in here..."
          onInput={(e) =>
            post = { ...post, title: (e.target as HTMLInputElement).value }}
        ></input>
        <textarea
          placeholder="Write some content..."
          onInput={(e) =>
            post = { ...post, content: (e.target as HTMLInputElement).value }
          }
        ></textarea>
        <input
          type="text"
          placeholder="Thumbnail Url"
          onInput={(e) =>
            post = {
              ...post,
              thumbnailUrl: (e.target as HTMLInputElement).value,
            }
          }
        ></input>
        <input
          type="text"
          placeholder="Author name"
          onInput={(e) =>
            post = {
              ...post,
              author: (e.target as HTMLInputElement).value,
            }
          }
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default PostCreateForm;
