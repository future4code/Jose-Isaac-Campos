import React from "react";
import VotingInfo from "../VotingInfo/VotingInfo";
import { CommentDetail, CommentsCount, Main } from "./CommentsInfoStyle";

export default function CommentsInfo({
  commentsCount,
  voteDirection,
  votesCount,
}) {
  return (
    <Main>
      <CommentDetail>
        <VotingInfo voteDirection={voteDirection} votesCount={votesCount} />
        <CommentsCount>
          {commentsCount} {commentsCount > 1 ? 'comentários' : 'comentário'}
        </CommentsCount>
      </CommentDetail>
    </Main>
  );
}
