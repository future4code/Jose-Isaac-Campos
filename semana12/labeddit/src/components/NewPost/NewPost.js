import React from "react";
import { Button, ContainerInputs, Main } from "./NewPostStyle";

import Input from "../Input/Input";
import NewPostIcon from "../../icons/speech-bubble-with-ellipsis.svg";
import TitlePostIcon from "../../icons/top.svg";
import { ReactComponent as SendIcon } from "../../icons/paper-plane.svg";
import { useForm } from "../../hooks/useForm";
import { createPost } from "../../services/api";

export default function NewPost({ setPosts, setNewPost }) {
  const [form, onChange, resetForm] = useForm({ text: "", title: "" });

  const onSubmit = (e) => {
    e.preventDefault();

    const body = {
      text: form.text,
      title: form.title,
    };

    const token = localStorage.getItem("token");

    createPost(body, token)
      .then(() => {
        setNewPost({ ...body});
        resetForm();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Main onSubmit={onSubmit}>
      <ContainerInputs>
        <Input
          pattern={"[^]{3,}$"}
          value={form.title}
          name="title"
          onChange={onChange}
          icon={TitlePostIcon}
          placeholder="Título..."
        />
        <Input
          pattern={"[a-zA-Z0-9]{3, }$"}
          value={form.text}
          name="text"
          onChange={onChange}
          icon={NewPostIcon}
          placeholder="Compartilhe suas ideias com o mundo..."
        />
      </ContainerInputs>
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
