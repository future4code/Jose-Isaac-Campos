import React from "react";
import VotingInfo from "../VotingInfo/VotingInfo";
import { CommentDetail, CommentsCount, Main } from "./CommentsInfoStyle";

export default function CommentsInfo({
  postId,
  commentsCount,
  voteDirection,
  votesCount,
}) {
  return (
    <Main>
      <CommentDetail>
        <VotingInfo postId={postId} voteDirection={voteDirection} votesCount={votesCount} />
        <CommentsCount>
          {commentsCount} {commentsCount > 1 ? 'comentários' : 'comentário'}
        </CommentsCount>
      </CommentDetail>
    </Main>
  );
}
