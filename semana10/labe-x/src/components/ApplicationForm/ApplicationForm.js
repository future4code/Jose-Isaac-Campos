import React, { useState } from "react";
import { useRequestData } from "../../hooks/useRequestData";
import { useForm } from "../../hooks/useForm";

import TitlePage from "../TitlePage/TitlePage";
import ButtonAction from "../ButtonAction/ButtonAction";
import { Main, Form, Input, Select, Option } from "./applicationForm-style";

import { countriesName } from "../../constants/countriesNameList";
import { apiSendData } from "../../services/api";

export default function ApplicationForm() {
  const initialForm = {
    tripId: "",
    userName: "",
    age: "",
    applicationText: "",
    profession: "",
    countryName: "",
  };
  const [form, onChange, resetForm] = useForm(initialForm);
  const [trips, setTrips] = useState([]);

  useRequestData("/trips", {}).then((response) => {
    setTrips(response.trips);
  });

  const handleForm = (event) => {
    event.preventDefault();
    onSubmit();
  };

  const onSubmit = () => {
    const body = {
      name: form.userName,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.countryName,
    }

    apiSendData(`/trips/${form.tripId}/apply`, body)
      .then((apply) => {
        if (apply.success) {
            resetForm()
            alert(apply.message)
        } else {
            alert(apply.error)
        }
      })
  }

  return (
    <Main>
      <TitlePage>Comprar um bilhete</TitlePage>
      <Form onSubmit={handleForm}>
        <Select
          pattern={"[a-zA-Z].{1,}$"}
          required
          name="tripId"
          onChange={onChange}
        >
          <Option value="">Escolha uma viagem:</Option>
          {trips &&
            trips.map((trip) => {
              return <Option value={trip.name}>{trip.name} - {trip.planet}</Option>;
            })}
        </Select>

        <Input
          pattern={"[a-zA-Z].{5,}$"}
          required
          type="text"
          onChange={onChange}
          value={form.userName}
          name="userName"
          placeholder="Nome"
        />
        <Input
          required
          type="number"
          onChange={onChange}
          value={form.age}
          name="age"
          min="18"
          placeholder="Idade"
        />
        <Input
          pattern={"[a-zA-Z].{30,}$"}
          required
          type="text"
          onChange={onChange}
          value={form.applicationText}
          name="applicationText"
          placeholder="Texto de candidatura"
        />
        <Input
          pattern={"[a-zA-Z].{10,}$"}
          required
          type="text"
          onChange={onChange}
          value={form.profession}
          name="profession"
          placeholder="Profissão"
        />

        <Select
          pattern={"[a-zA-Z].{1,}$"}
          required
          name="countryName"
          onChange={onChange}
        >
          <Option value="">Escolha um país:</Option>
          {countriesName.map((country) => {
            return <Option value={country.name}>{country.nome}</Option>;
          })}
        </Select>

        <ButtonAction>Enviar</ButtonAction>
      </Form>
    </Main>
  );
}
