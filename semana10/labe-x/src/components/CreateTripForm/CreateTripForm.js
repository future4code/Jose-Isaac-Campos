import React from "react";
import { useForm } from "../../hooks/useForm"

import { Main, Form, Input, Select, Option } from "./createTripForm-style";
import ButtonAction from "../ButtonAction/ButtonAction";
import TitlePage from "../TitlePage/TitlePage";

import { planets } from "../../constants/planetInSolarSystem";

export default function CreateTripForm() {
  const today = new Date().toISOString().split('T')[0]
  const initialForm = {
      name: '',
      planet: '',
      date: '',
      description: '',
      durationInDays: '',
  }
  const [form, onChange, resetForm] = useForm(initialForm)

  const handleForm = (event) => {
      event.preventDefault()

      const body = {
        name: form.name,
        planet: form.planet,
        date: form.date,
        description: form.description,
        durationInDays: form.durationInDays,
      }

      console.log(body);
  }
  
  return (
    <Main>
      <TitlePage>cadastrar nova viagem</TitlePage>
      <Form onSubmit={handleForm}>
        <Input pattern={"[a-zA-Z].{5,}$"} name="name" required type="text" placeholder="Nome" onChange={onChange}/>

        <Select pattern={"[a-zA-Z].{1,}$"} required name="planet" onChange={onChange}>
          <Option value="" key="planet">
            Planeta de destino
          </Option>
          {planets &&
            planets.map((planet) => {
              return (
                <Option value={planet.name} key={planet.name}>
                  {planet.name}
                </Option>
              );
            })}
        </Select>

        <Input onChange={onChange} required name="date" type="date" min={today} />
        <Input onChange={onChange} pattern={"[a-zA-Z].{30,}$"} required name="description" type="text" placeholder="Descrição" />
        <Input onChange={onChange} required name="dutationInDays" min="50" type="number" placeholder="Duração em dias" />

        <ButtonAction>Enviar</ButtonAction>
      </Form>
    </Main>
  );
}
