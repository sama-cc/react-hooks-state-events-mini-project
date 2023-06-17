import React from "react";
import Task from "./Task"

function TaskList({ taskList, setTaskList, tasksToDisplay, setSelTaskList }) {
  
  function deleteTask(text) {
    setTaskList(taskList.filter(task=> task.text !== text))
    setSelTaskList(taskList.filter(task=> task.text !== text))
  }

    return (
    <div className="tasks">
      {tasksToDisplay.map(task=>{
        return <Task key={task.text} text={task.text} category={task.category} deleteTask={deleteTask} />
      })}
    </div>
  );
}

export default TaskList;
