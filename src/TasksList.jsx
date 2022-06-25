import React from 'react';
import CreateTaskInput from './CreateTaskInput.jsx';
import Task from './Task.jsx';
import { fetchTasksList, createTask, updateTask, deleteTask } from './tasksGateway.js';
import './tasksList.scss';

class TasksList extends React.Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => fetchTasksList().then(tasksList => this.setState({ tasks: tasksList }));

  onCreate = text => {
    const newTask = {
      text,
      done: false,
    };

    createTask(newTask).then(() => this.fetchTasks());
  };

  handleTaskStatusChange = id => {
    const { done, text } = this.state.tasks.find(task => task.id === id);
    const updatedTask = {
      text,
      done: !done,
    };

    updateTask(id, updatedTask).then(() => this.fetchTasks());
  };

  handleTaskDelete = id => deleteTask(id).then(() => this.fetchTasks());

  render() {
    const sortedList = this.state.tasks
      .slice()
      .sort((a, b) => a.done - b.done)
      .map(item => (
        <Task
          key={item.id}
          {...item}
          onChange={this.handleTaskStatusChange}
          onDelete={this.handleTaskDelete}
        />
      ));

    return (
      <main className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">{sortedList}</ul>
      </main>
    );
  }
}

export default TasksList;
