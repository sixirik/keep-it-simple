import React from "react";
import { GiPlainCircle, MdAdd } from "react-icons/all";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import uniqid from "uniqid";
const TodoForm = (props) => {
  const [state, setState] = React.useState({
    todoTitle: "",
    activeTags: [],
  });
  const allCheckedTags = (tags, checked) => {
    return tags.filter((tag) => checked[tag.name]);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const todoTitle = state.todoTitle.trim();
    if (todoTitle) {
      props.addTodo({
        id: uniqid(),
        title: todoTitle,
        tags: allCheckedTags(props.tags, state.activeTags),
      });
    }
  };
  const onChangeTitleHandler = ({ target }) => {
    setState({ ...state, todoTitle: target.value });
  };
  const onChangeTagHandler = ({ target }) => {
    setState({
      ...state,
      activeTags: {
        ...state.activeTags,
        [target.name]: !state.activeTags[target.name],
      },
    });
  };
  return (
    <form onSubmit={onSubmitHandler} className="todo-form">
      <label className="todo-form__label">
        Todo title:
        <input
          type="text"
          className="text-field"
          name="todo"
          placeholder="Buy milk..."
          value={state.todoTitle}
          onChange={onChangeTitleHandler}
        />
      </label>
      <button className="add-button" type="submit">
        <MdAdd className="add-button__icon" />
        Add todo
      </button>
      <div className="todo-form__tags">
        {props.tags.map((tag, id) => {
          return (
            <label className="todo-form__checkbox" key={id}>
              <input
                type="checkbox"
                name={tag.name}
                className="todo-form__checkbox__input"
                onChange={onChangeTagHandler}
              />
              <span className="todo-form__checkbox__title">{tag.name}</span>
              <GiPlainCircle
                style={{
                  color: tag.color,
                }}
              />
            </label>
          );
        })}
      </div>
    </form>
  );
};
const mapDispatchToProps = {
  addTodo,
};
const mapStateToProps = (state) => ({
  tags: state.tagReducer,
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
