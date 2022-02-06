import { useState, useRef } from "react";
import { FormElement, FormLabel, FormInput, FormButton } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent === "") {
      inputRef.current.focus();
      return
    };

    dispatch(addTask({
      content: newTaskContent.trim(),
      done: false,
      id: nanoid(),
    }));
    
    setNewTaskContent("");
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