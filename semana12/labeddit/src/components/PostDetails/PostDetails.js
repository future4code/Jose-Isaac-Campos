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
      setCommnets(
        response.data.post.comments.sort((itemA, itemB) => {
          return itemA.createdAt === itemB.createdAt;
        })
      );
    });
  }, [params.id]);

  const updateComments = async () => {
    await getPostsDetails(post.id).then((response) => {
      console.log("update comments: ", response.data);
      setCommnets(
        response.data.post.comments.sort((itemA, itemB) => {
          return itemA.createdAt === itemB.createdAt;
        })
      );
    });
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
