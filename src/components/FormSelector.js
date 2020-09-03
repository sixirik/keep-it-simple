import React from "react";
import TodoForm from "./TodoForm";
import TagForm from "./TagForm";
import { MdLabel, MdInbox } from "react-icons/all";

const FormSelector = () => {
  const [selectedForm, selectForm] = React.useState(false);
  const onButtonClick = () => {
    selectForm(!selectedForm);
  };
  return (
    <div className="form-selector">
      {selectedForm ? <TagForm /> : <TodoForm />}
      <div className="form-selector__buttons ">
        <button
          className={`form-selector__buttons__item ${
            selectedForm ? null : "--focus"
          }`}
          onClick={onButtonClick}
        >
          <MdInbox />
        </button>
        <button
          className={`form-selector__buttons__item ${
            selectedForm ? "--focus" : null
          }`}
          onClick={onButtonClick}
        >
          <MdLabel />
        </button>
      </div>
    </div>
  );
};
export default FormSelector;
