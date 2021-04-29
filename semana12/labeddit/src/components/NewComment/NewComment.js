import React from "react";
import { useForm } from "../../hooks/useForm";
import Input from "../Input/Input";
import {Main, Button } from "./NewCommentStyle";
import { ReactComponent as SendIcon } from "../../icons/paper-plane.svg";
import NewCommentIcon from '../../icons/speech-bubbles-with-ellipsis.svg'
import { createComment } from '../../services/api'

export default function NewComment({postId, setNewComment}) {
  const [form, onChange, resetForm] = useForm({ text: ""});

  const onSubmit = (e) => {
    e.preventDefault();

    const body = {
      text: form.text,
    };

    const token = localStorage.getItem("token");

    createComment(body, postId ,token)
      .then(() => {
        resetForm();
        setNewComment({ ...body });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Main onSubmit={onSubmit}>
      <Input
        pattern={"[a-zA-Z0-9]{3, }$"}
        value={form.text}
        name="text"
        onChange={onChange}
        icon={NewCommentIcon}
        placeholder="Compartilhe suas ideias com o mundo..."
      />
      <Button>
        <SendIcon
          width="26px"
          fill="rgba(255, 255, 255, 1)"
          style={{ padding: " 0 10px", cursor: "pointer" }}
        />
      </Button>
    </Main>
  );
}
