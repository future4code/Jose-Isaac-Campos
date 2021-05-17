import React from "react";
import VotingInfo from "../VotingInfo/VotingInfo";
import { CommentDetail, CommentsCount, Main } from "./CommentsInfoStyle";

export default function CommentsInfo({
  postId,
  commentsCount,
  voteDirection,
  votesCount,
  callbackVote
}) {
  return (
    <Main>
      <CommentDetail>
        <VotingInfo id={postId} voteDirection={voteDirection} votesCount={votesCount} callbackVote={callbackVote} />
        <CommentsCount>
          {commentsCount} {commentsCount > 1 ? 'comentários' : 'comentário'}
        </CommentsCount>
      </CommentDetail>
    </Main>
  );
}
