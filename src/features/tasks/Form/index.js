import { useState, useRef } from "react";
import { FormElement, FormLabel, FormInput, FormButton } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  }
  
  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewTask(newTaskContent.trim());
    setNewTaskContent("");
    focusInput()
  };

  return (
    <FormElement onSubmit={onFormSubmit}>
      <FormLabel>
        <FormInput
          ref={inputRef}
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