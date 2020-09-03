import React from "react";
import { TiDelete } from "react-icons/all";
import { delTag, delTagFromTodo, setActiveTag } from "../actions";
import { connect } from "react-redux";

const TodoSection = ({
  name,
  icon,
  color,
  lock,
  delTag,
  setActiveTag,
  delTagFromTodo,
  activeTag,
}) => {
  const onSectionClickHandler = (e, tagName) => {
    if (e.target.tagName !== "button") setActiveTag(tagName);
  };
  const onDelButtonClickHandler = (tagName) => {
    delTag(tagName);
    delTagFromTodo(tagName);
    setActiveTag("inbox");
  };
  return (
    <li
      onClick={(e) => {
        onSectionClickHandler(e, name);
      }}
      className={`todo-section ${
        activeTag === name ? "todo-section-focus" : null
      }`}
      style={{ borderColor: color, textDecoration: "none" }}
    >
      <span className="todo-section__text">
        <i
          className="todo-section__icon"
          style={{
            color: color,
          }}
        >
          {icon}
        </i>
        {name}
      </span>

      {lock ? null : (
        <button
          className="todo-section__del"
          onClick={(e) => {
            e.stopPropagation();
            onDelButtonClickHandler(name);
          }}
        >
          <TiDelete className="todo-section__del__icon" />
        </button>
      )}
    </li>
  );
};
const mapStateToProps = (state) => ({
  activeTag: state.activeTagReducer.activeTag,
});
const mapDispatchToProps = {
  setActiveTag,
  delTag,
  delTagFromTodo,
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoSection);
