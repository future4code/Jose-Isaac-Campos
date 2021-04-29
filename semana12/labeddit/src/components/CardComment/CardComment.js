import React from "react";
import {
  Main,
  Username,
  TextComment,
  ContainerVoting,
} from "./CardCommentStyle";
import VotingInfo from "../VotingInfo/VotingInfo";
import { voteInComment } from "../../services/api";

export default function CardComment({ postId, comment }) {
  console.log(comment);

  const vote = async (body) => {
    const token = localStorage.getItem("token");
    return await voteInComment(body, postId, comment.id, token);
  };

  return (
    <Main>
      <Username>{comment.username}</Username>
      <TextComment>{comment.text}</TextComment>
      <ContainerVoting>
        <VotingInfo
          voteDirection={comment.userVoteDirection}
          votesCount={comment.votesCount}
          callbackVote={vote}
        />
      </ContainerVoting>
    </Main>
  );
}
