import React from "react";
import CommentsInfo from "../CommentsInfo/CommentsInfo";
import { Main, TextPost, Username } from "./CardPostStyle";

export default function CardPost({ post }) {
  return (
    <Main>
      <Username>{post.username}</Username>
      <TextPost>{post.text}</TextPost>
      <CommentsInfo
        postId={post.id}
        commentsCount={post.commentsCount}
        voteDirection={post.userVoteDirection}
        votesCount={post.votesCount}
      />
    </Main>
  );
}
