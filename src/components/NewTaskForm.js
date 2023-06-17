import React from "react";

function NewTaskForm({ categories, setDetailText, setTaskCatOption, onTaskFormSubmit, detailText }) {

  function handleDets(text) {
    setDetailText(text.target.value)
    //console.log(text.target.value)
  } 

  function handleOption(option) {
    setTaskCatOption(option.target.value)
    //console.log(option.target.value)
  }

  return (
    <form className="new-task-form" onSubmit={(e)=>onTaskFormSubmit(e)}>
      <label>
        Details
        <input type="text" name="text" onChange={(e)=>handleDets(e)} value={detailText} />
      </label>
      <label>
        Category
        <select name="category" onChange={(e)=>handleOption(e)}>
          {/* render <option> elements for each category here */}
          {categories.map(cat=>{
            if (cat.category !== "All") {
            return <option key={cat.category} value={cat.category}>{cat.category}</option>
            } else {
              return null
            }
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
