import React from "react";
import { Button, ContainerInputs, Main } from "./NewPostStyle";

import TextArea from "../TextArea/TextArea";
import {ReactComponent as TitlePostIcon} from "../../icons/top.svg";
import {ReactComponent as BalloonTextPostIcon} from "../../icons/speech-bubble-with-ellipsis.svg";
import {ReactComponent as SendIcon} from "../../icons/paper-plane.svg"
import { useForm } from "../../hooks/useForm";
import { createPost } from "../../services/api";
import SvgContainer from "../SvgContainer/SvgContainer";

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
        <TextArea
          pattern={"[^]{3,}$"}
          value={form.title}
          name="title"
          onChange={onChange}
          icon={<TitlePostIcon />}
          placeholder="Título..."
        />
        <TextArea
          pattern={"[a-zA-Z0-9]{3, }$"}
          value={form.text}
          name="text"
          onChange={onChange}
          icon={<BalloonTextPostIcon />}
          placeholder="Compartilhe suas ideias com o mundo..."
        />
      </ContainerInputs>
      <Button>
        <SvgContainer
          hover
          width="36px"
          fillColor="rgba(255, 255, 255, 1)"
          hoverFillColor="#2ed573"
        >
          <SendIcon /> 
        </SvgContainer>
      </Button>
    </Main>
  );
}
