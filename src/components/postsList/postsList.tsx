import React from "react";
import { PostsListItem } from "../postsListItem/postsListItem";
import styles from "./postsList.module.scss";
import { Post } from "../postsListItem/postsListItem.types";

export const PostsList: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <PostsListItem key={post.id} post={post} />
      ))}
    </div>
  );
};
