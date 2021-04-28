import React from "react";
import { goToPostDetailsPage } from "../../router/coordinator";
import CommentsInfo from "../CommentsInfo/CommentsInfo";
import { Main, TextPost, Username, Title } from "./CardPostStyle";
import { useHistory } from "react-router-dom"

export default function CardPost({ post }) {
  const history = useHistory()

  const toDetails = () => {
    goToPostDetailsPage(history, post.id)
  }
  return (
    <Main onClick={toDetails}>
      <Username>{post.username}</Username>
      <Title>{post.title}</Title>
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
