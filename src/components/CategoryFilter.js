import React, { useState } from "react";

function CategoryFilter({ categories, taskList, setSelTaskList }) {

  const [catList, setCatlist] = useState(categories)

  

  function changeCatList(cat) {
    setSelTaskList(()=>{
      if (cat === "All") {
        return taskList;
      } else {
      return taskList.filter(task=>task.category === cat);
  }
    })
  }

  function handleClick(event) {
    changeCatList(event)
    setCatlist(()=>categories.map(cat=>{            
      if (cat.category !== event) {
        return cat;
      } else {
        return {...cat, class: "selected"}
      }
    }))
  }



  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catList.map(category=>{
        return <button key={category.category} onClick={()=>handleClick(category.category)} className={category.class}>{category.category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
