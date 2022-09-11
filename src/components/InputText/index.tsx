import React, { ChangeEvent } from "react";
import * as s from "./style";
import { TInputTextProps } from "./types";

const InputText: React.FC<TInputTextProps> = ({
  label,
  placeholder,
  required,
  whenChanged,
  text,
}) => {
  const WhenTyping = (event: ChangeEvent<HTMLInputElement>) => {
    whenChanged(event.target.value);
  };

  return (
    <s.Container>
      <s.TitleInput>{label}</s.TitleInput>
      <s.Input
        type="text"
        placeholder={placeholder}
        onChange={WhenTyping}
        value={text}
        required={required}
      />
    </s.Container>
  );
};

export default InputText;
