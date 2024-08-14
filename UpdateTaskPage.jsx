import React, { useState } from 'react';
import './UpdateTaskPage.css';

const UpdateTaskPage = () => {
  const [tasks, setTasks] = useState([
    { id: 1, teacher: 'Mr. Smith', task: 'Grade assignments', date: '2024-08-13' },
    { id: 2, teacher: 'Ms. Johnson', task: 'Prepare lesson plan', date: '2024-08-14' },
    { id: 3, teacher: 'Mr. Brown', task: 'Organize sports day', date: '2024-08-15' },
  ]);

  const [editingTask, setEditingTask] = useState(null);
  const [taskDetails, setTaskDetails] = useState({ teacher: '', task: '', date: '' });
  const [newTask, setNewTask] = useState({ teacher: '', task: '', date: '' });

  const handleEdit = (task) => {
    setEditingTask(task.id);
    setTaskDetails({ teacher: task.teacher, task: task.task, date: task.date });
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleUpdate = () => {
    setTasks(
      tasks.map((task) =>
        task.id === editingTask ? { ...task, ...taskDetails } : task
      )
    );
    setEditingTask(null);
    setTaskDetails({ teacher: '', task: '', date: '' });
  };

  const handleChange = (e) => {
    setTaskDetails({ ...taskDetails, [e.target.name]: e.target.value });
  };

  const handleNewTaskChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleAddTask = () => {
    const newTaskId = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    setTasks([...tasks, { id: newTaskId, ...newTask }]);
    setNewTask({ teacher: '', task: '', date: '' });
  };

  return (
    <div className="update-task-container">
      <h2 className="update-task-title">Update Tasks by Teacher</h2>
      <table className="task-table">
        <thead>
          <tr>
            <th>Teacher Name</th>
            <th>Task</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.teacher}</td>
              <td>{task.task}</td>
              <td>{task.date}</td>
              <td>
                <button className="edit-button" onClick={() => handleEdit(task)}>Edit</button>
                <button className="delete-button" onClick={() => handleDelete(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingTask && (
        <div className="edit-task-form">
          <h3>Edit Task</h3>
          <input
            type="text"
            name="teacher"
            value={taskDetails.teacher}
            onChange={handleChange}
            placeholder="Teacher Name"
            className="task-input"
          />
          <input
            type="text"
            name="task"
            value={taskDetails.task}
            onChange={handleChange}
            placeholder="Task"
            className="task-input"
          />
          <input
            type="date"
            name="date"
            value={taskDetails.date}
            onChange={handleChange}
            className="task-input"
          />
          <button className="update-button" onClick={handleUpdate}>Update Task</button>
        </div>
      )}

      <div className="add-task-form">
        <h3>Add New Task</h3>
        <input
          type="text"
          name="teacher"
          value={newTask.teacher}
          onChange={handleNewTaskChange}
          placeholder="Teacher Name"
          className="task-input"
        />
        <input
          type="text"
          name="task"
          value={newTask.task}
          onChange={handleNewTaskChange}
          placeholder="Task"
          className="task-input"
        />
        <input
          type="date"
          name="date"
          value={newTask.date}
          onChange={handleNewTaskChange}
          className="task-input"
        />
        <button className="add-button" onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
};

export default UpdateTaskPage;
