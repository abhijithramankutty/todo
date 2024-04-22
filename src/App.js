import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {useState, useEffect} from 'react';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

function App() {
const [toDoList, setToDoList] = useState([]);

useEffect(() => {
    fetch('http://localhost:9000/todo-service/getTodoList', {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(results => results.json())
    .then(data => setToDoList(data));
}, [])

const handleFilter = () => {
    let filtered = toDoList.filter(todo => {
        return !todo.complete;
    });
    setToDoList(filtered);
}

const addTask = (userInput) => {
    let copy = [...toDoList];
    fetch("http://localhost:9000/todo-service/addTodo", {
        method: "POST",
        headers: {
                    "Content-Type": "application/json"
                },
        body: JSON.stringify({id: toDoList.length + 1, task: userInput, complete: false})
    })
    .then(results => results.json())
    .then(data => setToDoList([...copy, data]));
}

const handleToggle = (id) => {
    let mapped = toDoList.map(todo=> {
    return todo.id === Number(id) ? {...todo, complete: !todo.complete} : {...todo};
    });
    setToDoList(mapped);

}
  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleFilter={handleFilter} handleToggle={handleToggle}/>
      <ToDoForm addTask={addTask}/>
    </div>
  );
}

export default App;
