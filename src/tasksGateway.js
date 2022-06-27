const baseURL = 'https://6275fcfd15458100a6a9c207.mockapi.io/api/v1/todo';

export const fetchTasksList = () => fetch(baseURL).then(res => res.json());

export const createTask = taskData =>
  fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(taskData),
  }).then(res => {
    if (!res.ok) {
      throw new Error('Failed to create task');
    }
  });

export const updateTask = (taskId, taskData) =>
  fetch(`${baseURL}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  }).then(res => {
    if (!res.ok) {
      throw new Error('Failed to update task');
    }
  });

export const deleteTask = taskId =>
  fetch(`${baseURL}/${taskId}`, {
    method: 'DELETE',
  }).then(res => {
    if (!res.ok) {
      throw new Error('Failed to delete task');
    }
  });
