import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [taskList, setTaskList] = useState(TASKS)
  const [selTaskList, setSelTaskList] = useState([...taskList])

  const [detailText, setDetailText] = useState("")
  const [taskCatOption, setTaskCatOption] = useState("Code")

  function onTaskFormSubmit(e) {
    e.preventDefault();

    const newTask = {
      text: detailText,
      category: taskCatOption,
    }

    setTaskList([...taskList, newTask])
    setSelTaskList([...taskList, newTask])
    
  }

  let tasksToDisplay = selTaskList

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} taskList={taskList} setTaskList={setTaskList} setSelTaskList={setSelTaskList} />
      <NewTaskForm categories={CATEGORIES} taskList={taskList} setTaskList={setTaskList} setSelTaskList={setSelTaskList} setDetailText={setDetailText} detailText={detailText} onTaskFormSubmit={onTaskFormSubmit} setTaskCatOption={setTaskCatOption} />
      <TaskList taskList={taskList} setTaskList={setTaskList} tasksToDisplay={tasksToDisplay} setSelTaskList={setSelTaskList} />
    </div>
  );
}

export default App;
