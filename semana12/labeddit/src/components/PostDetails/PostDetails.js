import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostsDetails } from "../../services/api";
import CardComment from "../CardComment/CardComment";
import CardPost from "../CardPost/CardPost";
import NewComment from "../NewComment/NewComment";
import { Main, SectionComments, SectionPostInfo } from "./PostDetailsStyle";

export default function PostDetails() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setCommnets] = useState([]);

  useEffect(() => {
    getPostsDetails(params.id).then((response) => {
      setPost(response.data.post);
      setCommnets([...response.data.post.comments]);
    });
  }, [params.id]);

  const updateComments = async () => {
    await getPostsDetails(post.id).then((response) => {
      sortComments(response.data.post.comments)
    });
  };

  const sortComments = (comments) => {
    const commentsSorted = comments
      .sort((itemA, itemB) => {
        return itemB.createdAt - itemA.createdAt;
      })
      .sort((itemA, itemB) => {
        return itemB.votesCount - itemA.votesCount;
      });
    setCommnets([...commentsSorted]);
  };

  console.log(comments);

  const setNewComment = (newComment) => {
    setCommnets([newComment, ...comments]);
    updateComments();
  };

  return (
    <Main>
      <SectionPostInfo>
        <CardPost post={post} />
      </SectionPostInfo>

      <SectionComments>
        <NewComment postId={post.id} setNewComment={setNewComment} />
        {comments &&
          comments.map((comment) => {
            return (
              <CardComment
                key={comment.id}
                postId={post.id}
                comment={comment}
              />
            );
          })}
      </SectionComments>
    </Main>
  );
}
