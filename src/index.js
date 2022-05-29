import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles.css";

const rootElem = document.querySelector("#root");

const titleElem = <h1 className="title">Todo List</h1>;
const todoListElem = (
  <main className="todo-list">
    <div className="actions">
        <input className="task-input" type="text" />
        <button className="btn create-task-btn">Create</button>
    </div>
    <ul className="list"></ul>
  </main>
);


const todoElem = (
  <>
    {titleElem}
    {todoListElem}
  </>
)

ReactDOM.render(todoElem, rootElem);
