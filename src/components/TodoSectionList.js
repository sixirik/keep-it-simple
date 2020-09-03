import React from "react";
import TodoSection from "./TodoSection";
import { MdInbox, MdLabel } from "react-icons/all";
import { connect } from "react-redux";
const TodoSectionList = (props) => {
  return (
    <div>
      <p className="todo-section-list__subtitle">Todos</p>
      <ul className="todo-section-list">
        <TodoSection
          name="inbox"
          icon={<MdInbox />}
          color="#ce1fff"
          key={0}
          lock
        />
      </ul>
      <p className="todo-section-list__subtitle">Tags</p>
      <ul className="todo-section-list">
        {props.tags.map(({ name, color }, id) => {
          return (
            <TodoSection
              name={name}
              icon={<MdLabel />}
              color={color}
              key={id}
            />
          );
        })}
      </ul>
    </div>
  );
};
const mapStateToProps = (state) => ({
  tags: state.tagReducer,
});

export default connect(mapStateToProps)(TodoSectionList);
