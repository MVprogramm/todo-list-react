import React from 'react';
import TasksList from './TasksList.jsx';
import './app.scss';

const App = () => (
  <div>
    <h1 className="title">Todo List</h1>
    <TasksList />
  </div>
);

export default App;
