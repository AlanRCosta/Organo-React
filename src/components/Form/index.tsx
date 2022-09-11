import * as s from "./style";
import InputText from "../InputText";
import DropDownList from "../DropDownList";
import Button from "../Button";
import React, { useState } from "react";
import { TForm } from "./types";

const Form: React.FC<TForm> = ({ registeredCollaborator, teamsNames }) => {
  const [name, setName] = useState("");
  const [office, setOffice] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const WhenSaving = (event: React.FormEvent) => {
    event.preventDefault();
    registeredCollaborator({
      name,
      office,
      image,
      team,
    });
    setName("");
    setOffice("");
    setImage("");
    setTeam("");
  };
  return (
    <s.Container>
      <s.CardForm onSubmit={WhenSaving}>
        <s.Subtitle>
          Preencha os dados para criar o card do colaborador
        </s.Subtitle>
        <InputText
          label="Nome"
          placeholder="Digite seu nome"
          text={name}
          whenChanged={(e) => setName(e)}
          required
        />
        <InputText
          label="Cargo"
          placeholder="Digite seu cargo"
          text={office}
          whenChanged={(e) => setOffice(e)}
          required
        />
        <InputText
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          text={image}
          whenChanged={(e) => setImage(e)}
        />
        <DropDownList
          label="Times"
          items={teamsNames}
          text={team}
          whenChanged={(e) => setTeam(e)}
          required
        />
        <Button text="Criar Card" />
      </s.CardForm>
    </s.Container>
  );
};

export default Form;
