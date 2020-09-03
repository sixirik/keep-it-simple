import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";

const TodoList = (props) => {
  const filterTodoByActiveTag = (todos, { activeTag }) => {
    return todos.filter((todo) => {
      if (activeTag === "inbox") return true;
      return todo.tags.some((tag) => tag.name === activeTag);
    });
  };
  const filterTodos = filterTodoByActiveTag(props.todos, props.activeTag);

  return (
    <ul className="todo-list">
      {filterTodos.map(({ title, tags, id }) => {
        return <TodoItem title={title} tags={tags} key={id} id={id} />;
      })}
    </ul>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todoReducer,
  activeTag: state.activeTagReducer,
});
export default connect(mapStateToProps)(TodoList);
