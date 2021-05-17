import React from "react"
import SvgContainer from "../SvgContainer/SvgContainer"

import { Main, TextAreaStyled } from "./TextAreaStyle"

export default function Input({
  icon,
  placeholder,
  name,
  value,
  onChange,
  pattern,
  type,
  fillColor
}) {
  return (
    <Main>
      <SvgContainer width="30px" fillColor={fillColor ? fillColor : "rgba(255, 255, 255, 1)"}>
        {icon}
      </SvgContainer>
      <TextAreaStyled
        required
        type={type}
        pattern={pattern}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Main>
  )
}
