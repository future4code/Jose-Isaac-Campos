import React, { useState } from "react";
import { Main, VoteCount } from "./VotingInfoStyle";

import { ReactComponent as UpArrow } from "../../icons/up-arrow.svg";
import { vote } from "../../services/api";

export default function VotingInfo({ postId, voteDirection, votesCount }) {
  const id = postId
  const [direction, setDirection] = useState(voteDirection);
  const [votes, setVotes] = useState(votesCount);

  const onClickVote = (userVote) => {
    if (userVote === direction) {
      userVote = 0;
    }

    const token = localStorage.getItem("token");

    const body = {
      direction: userVote,
    };

    vote(body, id, token)
      .then((res) => {
        if (userVote === 0) {
          if (direction > 0) {
            setVotes(votes - 1);
          } else if (direction < 0) {
            setVotes(votes + 1);
          }
        } else {
          setVotes(votes + userVote);
        }

        setDirection(userVote);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let fillColor =
    direction === 0 ? "#747d8c" : direction === 1 ? "#5352ed" : "#ff4757";
  return (
    <Main>
      <UpArrow
        onClick={() => onClickVote(1)}
        width="20px"
        height="20px"
        fill={direction >= 0 && fillColor}
        style={{ cursor: "pointer" }}
      />
      <VoteCount>{votes}</VoteCount>
      <UpArrow
        onClick={() => onClickVote(-1)}
        width="20px"
        height="20px"
        fill={direction <= 0 && fillColor}
        style={{ transform: "rotate(180deg)", cursor: "pointer" }}
      />
    </Main>
  );
}
