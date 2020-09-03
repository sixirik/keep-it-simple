import {
  ADD_TODO,
  DONE_TODO,
  DEL_TAG_FROM_TODO,
  ADD_TAG,
  DEL_TAG,
  SET_ACTIVE_TAG,
} from "./types";
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};
export const doneTodo = (id) => {
  return {
    type: DONE_TODO,
    payload: {
      id: id,
    },
  };
};
export const delTagFromTodo = (name) => {
  return {
    type: DEL_TAG_FROM_TODO,
    payload: {
      name: name,
    },
  };
};
export const addTag = (tag) => {
  return {
    type: ADD_TAG,
    payload: tag,
  };
};
export const delTag = (name) => {
  return {
    type: DEL_TAG,
    payload: {
      name: name,
    },
  };
};
export const setActiveTag = (name) => {
  return {
    type: SET_ACTIVE_TAG,
    payload: {
      activeTag: name,
    },
  };
};
