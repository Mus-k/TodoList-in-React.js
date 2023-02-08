import React, { useState } from "react";

const Form = ({ onAddTask }) => {
  const [todo, setTodo] = useState("");
  const [day, setDay] = useState("");

  //submission
  function handleSubmit(e) {
    e.preventDefault();
    if (!todo || !day) {
      alert("add task and select the date please!");
      return null;
    }
    /*passing data to the add function in the TodoList component and setting input field empty */
    onAddTask({ todo, day });
    setTodo("");
    setDay("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="add task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <br />
        <input
          type="date"
          placeholder="add task"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
        <br />
        <button className="btn">Add Task</button>
      </form>
    </div>
  );
};

export default Form;
