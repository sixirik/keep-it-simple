import React from "react";
import { GithubPicker } from "react-color";
import { connect } from "react-redux";
import { addTag } from "../actions";
import { MdAdd } from "react-icons/all";
import ErrorMessage from "./ErrorMessage";
import { duplicateNameValidation, lengthValidation } from "../validation";

const TagForm = (props) => {
  const [state, setState] = React.useState({
    tag: {
      name: "",
      color: "#e2e2e2",
    },
    error: "",
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const tagName = state.tag.name.trim();
    if (tagName) {
      if (duplicateNameValidation(props.tags, tagName))
        props.addTag({
          name: tagName,
          color: state.tag.color,
        });
      else {
        setState({ ...state, error: "Tag name exist " });
      }
    }
  };
  const onChangeColorHandler = ({ hex }) => {
    setState({
      ...state,
      tag: {
        ...state.tag,
        color: hex,
      },
    });
  };
  const onChangeNameHandler = ({ target }) => {
    if (lengthValidation(target.value, 12))
      setState({ ...state, error: "Tag name is too long " });
    else {
      setState({ ...state, error: "" });
      setState({
        ...state,
        tag: { ...state.tag, name: target.value },
      });
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="tag-form">
      <label className="tag-form__label">
        Tag name:
        {state.error ? <ErrorMessage error={state.error} /> : null}
        <input
          onChange={onChangeNameHandler}
          value={state.tag.name}
          type="text"
          className="text-field"
          style={{
            borderBottom: "solid 1px" + state.tag.color,
          }}
        />
      </label>

      <GithubPicker onChangeComplete={onChangeColorHandler} />
      <button className="add-button" type="submit">
        <MdAdd className="add-button__icon" />
        Add tag
      </button>
    </form>
  );
};
const mapDispatchToProps = {
  addTag,
};
const mapStateToProps = (state) => ({
  tags: state.tagReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(TagForm);
