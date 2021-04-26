import React from "react"

import { Main, Icon, InputStyled } from "./InputStyle"

export default function Input({
  icon,
  placeholder,
  name,
  value,
  onChange,
  pattern,
  type,
}) {
  return (
    <Main>
      <Icon src={icon} alt={name} />
      <InputStyled
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
