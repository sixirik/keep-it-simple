import React from "react";
import { FiCircle, GiPlainCircle, MdDone } from "react-icons/all";
import { connect } from "react-redux";
import { doneTodo } from "../actions";

const TodoItem = ({ title, tags, doneTodo, id }) => {
  return (
    <li className="todo-item paper">
      <div className="todo-item__title">
        <FiCircle className="todo-item__title__icon" /> {title}
      </div>
      <div className="todo-item__right">
        <ul className="todo-item__tags">
          {tags.map(({ color, name }, id) => {
            return (
              <li className="todo-item__tags__item" key={id}>
                <GiPlainCircle
                  className="todo-item__tags__item__icon"
                  style={{ color: color }}
                />
                {name}
              </li>
            );
          })}
        </ul>
        <button
          className="todo-item__button"
          aria-label="Mark as done"
          onClick={() => {
            doneTodo(id);
          }}
        >
          <MdDone className="todo-item__button__icon" />
        </button>
      </div>
    </li>
  );
};
const mapDispatchToProps = {
  doneTodo,
};
export default connect(null, mapDispatchToProps)(TodoItem);
