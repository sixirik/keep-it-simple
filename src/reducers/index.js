import { combineReducers } from "redux";
import {
  ADD_TODO,
  DONE_TODO,
  DEL_TAG_FROM_TODO,
  ADD_TAG,
  DEL_TAG,
  SET_ACTIVE_TAG,
} from "../actions/types";
const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DONE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    case DEL_TAG_FROM_TODO:
      return state.map((todo) => {
        todo.tags = todo.tags.filter((tag) => tag.name !== action.payload.name);
        return todo;
      });
    default:
      return state;
  }
};
const tagReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TAG:
      return [...state, action.payload];
    case DEL_TAG: {
      return state.filter((tag) => tag.name !== action.payload.name);
    }
    default:
      return state;
  }
};
const activeTagReducer = (
  state = {
    activeTag: "inbox",
  },
  action
) => {
  switch (action.type) {
    case SET_ACTIVE_TAG:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  todoReducer,
  tagReducer,
  activeTagReducer,
});
