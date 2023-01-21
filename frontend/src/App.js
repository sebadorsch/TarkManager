import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoView from "./components/TodoListView";

function App() {

  const [todoList, setTodoList] = useState([{}])
  const getTodoList = async () => {
    const res = await axios.get('http://localhost:8000/api/todo');
    setTodoList(res.data);
  };
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    getTodoList()
  })

  const addTodoHandler = async () => {
    const todo = {'title': title, 'description': description}
    await axios.post('http://localhost:8000/api/todo', todo)
  }


  return (
    <div className="App list-group-item justify-content-center align-items-center mx-auto" style={{width: "50%", backgroundColor: "white", marginTop: "15px"}}>
      <h1 className="card text-white bg-primary mb-1" stylename="max-width: 20rem">Task Manager</h1>
      <h6 className="card text-white bg-primary mb-3">FASTAPI - React - MongoDB</h6>
      <div className="card-body">
        <h5 className="card text-white bg-dark mb-3 mt-4" style={{borderRadius: '0'}}>Add a new Task</h5>
        <span className="card-text">
          <input className="mb-2 form-control titleIn" onChange={event => setTitle(event.target.value)} placeholder='Title'/>

          <input className="mb-2 form-control desIn" onChange={event => setDescription(event.target.value)} placeholder='Description'/>

          <button className="btn btn-success mb-3" onClick={addTodoHandler} style={{fontWeight :"bold"}}>Add Task</button>
        </span>

        <h5 className="card text-white bg-dark mt-4 mb-2" style={{borderRadius: '0'}}>Your Tasks</h5>

        <div>
          <TodoView todoList={todoList} />
        </div>

      </div>

      <div className='raw d-flex justify-content-center'>
        <h6 className="card text-dark bg-warning py-1 mb-0" style={{position: 'fixed', bottom: '0', width: '100%', borderRadius: '0'}}>Copyright 2023, All rights reserved &copy;</h6>
      </div>

    </div>
  );
}

export default App;
