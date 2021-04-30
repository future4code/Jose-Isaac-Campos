import React from "react";
import {
  Main,
  Username,
  TextComment,
  ContainerVoting,
  DateFormated,
} from "./CardCommentStyle";
import VotingInfo from "../VotingInfo/VotingInfo";
import { voteInComment } from "../../services/api";

export default function CardComment({ postId, comment }) {
  console.log(comment);

  const vote = async (body) => {
    const token = localStorage.getItem("token");
    return await voteInComment(body, postId, comment.id, token);
  };

  const formateDate = () => {
    const date = new Date(comment.createdAt);
    return date.toLocaleDateString("pt-br");
  };

  return (
    <Main>
      <Username>{comment.username}</Username>
      <TextComment>
        {typeof comment.text === "string" ? (
          comment.text
        ) : (
          <span>Comentário bloqueado!</span>
        )}
      </TextComment>
      <ContainerVoting>
        <VotingInfo
          voteDirection={comment.userVoteDirection}
          votesCount={comment.votesCount}
          callbackVote={vote}
        />
        <DateFormated>{formateDate()}</DateFormated>
      </ContainerVoting>
    </Main>
  );
}
