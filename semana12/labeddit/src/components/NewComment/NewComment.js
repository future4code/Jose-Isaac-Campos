import React from "react";
import { useForm } from "../../hooks/useForm";
import TextArea from "../TextArea/TextArea";
import { Main, Button } from "./NewCommentStyle";
import { ReactComponent as SendIcon } from "../../icons/paper-plane.svg";
import {ReactComponent as BalloonComponentIcon} from "../../icons/speech-bubbles-with-ellipsis.svg";
import { createComment } from "../../services/api";
import SvgContainer from "../SvgContainer/SvgContainer";

export default function NewComment({ postId, setNewComment }) {
  const [form, onChange, resetForm] = useForm({ text: "" });

  const onSubmit = (e) => {
    e.preventDefault();

    const body = {
      text: form.text,
    };

    const token = localStorage.getItem("token");

    createComment(body, postId, token)
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
      <TextArea
        pattern={"[a-zA-Z0-9]{3, }$"}
        value={form.text}
        name="text"
        onChange={onChange}
        icon={<BalloonComponentIcon />}
        placeholder="Compartilhe sua opinião sobre o tema..."
      />
      <Button>
        <SvgContainer
          hover
          width="26px"
          fillColor="rgba(255, 255, 255, 1)"
          hoverFillColor="#2ed573"
        >
          <SendIcon />
        </SvgContainer>
      </Button>
    </Main>
  );
}
