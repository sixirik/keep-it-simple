import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./styles/styles.scss";
import App from "./App";
import { Provider } from "react-redux";
import Persist from "./configureStore";
import { PersistGate } from "redux-persist/integration/react";
const store = Persist().store;
const persistor = Persist().persistor;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.querySelector("#root")
);
