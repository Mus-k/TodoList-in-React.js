import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Form from "./Form";
import todos from "./TodoData";

const TodoList = () => {
  const [task, setTask] = useState(todos);
  const [show, setShow] = useState(false);
  // adding task and creating Id for each task
  function addTask(tasks) {
    let id = Date.now();
    const newTodo = { ...tasks, id };
    setTask([...task, newTodo]);
  }

  /// delete task
  function handleDelete(id) {
    if (window.confirm("Are sure to delete it")) {
      let del = task.filter((item) => item.id !== id);
      setTask(del);
    }
  }
  function showForm() {
    setShow((prev) => !prev);
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Todo List</h1>
        <button className="btn2" onClick={showForm}>
          {show ? "Close form" : "add Task"}
        </button>
      </div>
      {task.length < 1 && <h4>No task remain</h4>}
      {show && <Form onAddTask={addTask} />}
      <ul>
        {task.map((item) => (
          <li key={item.id} className="todos">
            <h3>
              {item.todo} <p>{item.day}</p>
            </h3>{" "}
            <span onClick={() => handleDelete(item.id)}>
              <FaTrash className="trash" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
