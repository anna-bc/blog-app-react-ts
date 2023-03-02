import React from "react"
import { Post } from "../../../models/PostModel";
import PostCard from "../PostCard/PostCard";

type PostListProps = {
  posts: Post [];
}

function PostList(props: PostListProps) {

  return (
    <div>
      <ul>
      {props.posts.map((post) => <li key={post.id}><PostCard post={post} /></li>)}
      </ul>
    </div>
  )
};

export default PostList;
