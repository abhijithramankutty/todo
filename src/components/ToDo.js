import React from "react";

const ToDo = ({todo, handleToggle}) => {

const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
}
    return(
        <div id={todo.id}
             key={todo.id + todo.task}
             value={todo.id}
             name="todo"
             onClick={handleClick}
             className={todo.complete ? "complete": ""}
        >
        {todo.task}
        </div>
    );
};
export default ToDo;