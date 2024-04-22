import React from "react";
import ToDo from "./ToDo";
const ToDoList = ({toDoList, handleFilter, handleToggle}) => {
   return (
    <div>
        {toDoList && toDoList.map(todo => {
            return (
                <ToDo key={todo.id} todo={todo} handleToggle={handleToggle}/>
            )
        })
        }
        <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
    </div>
   )
}
export default ToDoList;