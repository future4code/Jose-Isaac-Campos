import React, { useState, useEffect } from "react";
import { Main, VoteCount } from "./VotingInfoStyle";

import { ReactComponent as UpArrow } from "../../icons/up-arrow.svg";

export default function VotingInfo({ voteDirection, votesCount, callbackVote }) {
  const [direction, setDirection] = useState(voteDirection);
  const [votes, setVotes] = useState(votesCount);

  useEffect(() => {
    setVotes(votesCount)
    setDirection(voteDirection)
  }, [votesCount, voteDirection])

  const onClickVote = (userVote) => {
    console.log(votes);
    if (userVote === direction) {
      userVote = 0;
    }

    const body = {
      direction: userVote,
    };

    callbackVote(body)
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
        console.log(err.message);
      });
  };

  let fillColor =
    direction === 0 ? "#747d8c" : direction === 1 ? "#0fb9b1" : "#ff4757";

  return (
    <Main>
      <UpArrow
        onClick={() => onClickVote(1)}
        width="24px"
        height="24px"
        fill={direction >= 0 && fillColor}
        style={{ cursor: "pointer" }}
      />
      <VoteCount>{votes}</VoteCount>
      <UpArrow
        onClick={() => onClickVote(-1)}
        width="24px"
        height="24px"
        fill={direction <= 0 && fillColor}
        style={{ transform: "rotate(180deg)", cursor: "pointer" }}
      />
    </Main>
  );
}
