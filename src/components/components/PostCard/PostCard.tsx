import React from "react"
import { Post } from "../../../models/PostModel";
import { Tag } from "../../../models/TagModel";

type PostProps = {
    post: Post,
}

function PostCard({post} : PostProps) {
  return (
    <div className="PostCard">
      <div className="PostCard__thumbnail"></div>
      <div className="PostCard__title">{post.title}</div>
      <div className="PostCard__date">{post.creationDate}</div>
      <div className="PostCard__readMoreBtn"></div>
      <div className="PostCard__tags">{post.tags.map((tag) => <div className="PostCard__tags_tag">{tag.name}</div>)}</div>
    </div>
  )
};

export default PostCard;
