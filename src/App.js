import React from "react";
import Logo from "./components/Logo";
import TodoSectionList from "./components/TodoSectionList";
import TodoList from "./components/TodoList";
import FormSelector from "./components/FormSelector";
const App = () => {
  return (
    <div className="app">
      <header className="header">
        <Logo />
      </header>
      <section className="leftbar">
        <TodoSectionList />
      </section>
      <main className="main">
        <div className="container">
          <TodoList />
        </div>
      </main>
      <section className="rightbar">
        <FormSelector />
      </section>
    </div>
  );
};

export default App;
