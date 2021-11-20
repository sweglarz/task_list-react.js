import { useState } from "react";
import { FormElement, FormLabel, FormInput, FormButton } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("")
  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
  };

  return (
    <FormElement onSubmit={onFormSubmit}>
      <FormLabel>
        <FormInput
          value={newTaskContent}
          className="form__input"
          type="text"
          placeholder="Co jest do zrobienia?"
          onChange={({ target }) => setNewTaskContent(target.value)}
        />
        <FormButton>Dodaj zadanie</FormButton>
      </FormLabel>
    </FormElement>
  )
};

export default Form;