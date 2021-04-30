import React from "react";
import { Button, ContainerInputs, Main } from "./NewPostStyle";

import Input from "../Input/Input";
import TitlePostIcon from "../IconsComponents/TitlePostIcon";
import BalloonTextPostIcon from "../IconsComponents/BalloonTextPostIcon"
import { useForm } from "../../hooks/useForm";
import { createPost } from "../../services/api";
import SendIcon from "../IconsComponents/SendIcon";

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
        setNewPost({ ...body });
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
          icon={
            <TitlePostIcon width="26px" fillColor="rgba(255, 255, 255, 1)" />
          }
          placeholder="Título..."
        />
        <Input
          pattern={"[a-zA-Z0-9]{3, }$"}
          value={form.text}
          name="text"
          onChange={onChange}
          icon={<BalloonTextPostIcon width="26px" fillColor="rgba(255, 255, 255, 1)"/>}
          placeholder="Compartilhe suas ideias com o mundo..."
        />
      </ContainerInputs>
      <Button>
        <SendIcon
          width="36px"
          fillColor="rgba(255, 255, 255, 1)"
          hoverFillColor="#2ed573"
        />
      </Button>
    </Main>
  );
}
