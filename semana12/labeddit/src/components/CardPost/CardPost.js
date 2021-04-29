import React from "react";
import { goToPostDetailsPage } from "../../router/coordinator";
import CommentsInfo from "../CommentsInfo/CommentsInfo";
import { Main, TextPost, Username, Title } from "./CardPostStyle";
import { useHistory } from "react-router-dom"
import { vote } from "../../services/api";


export default function CardPost({ post }) {
  const history = useHistory()
  
  const voteInPost = async (body) => {
    const token = localStorage.getItem("token");
    return await vote(body, post.id, token)
  }

  const toDetails = () => {
    goToPostDetailsPage(history, post.id)
  }
  return (
    <Main>
      <div onClick={toDetails}>
        <Username>{post.username}</Username>
        <Title>{post.title}</Title>
        <TextPost>{post.text}</TextPost>
      </div>
      <CommentsInfo
        callbackVote={voteInPost}
        postId={post.id}
        commentsCount={post.commentsCount}
        voteDirection={post.userVoteDirection}
        votesCount={post.votesCount}
      />
    </Main>
  );
}
