import axios from "axios";
import React from "react";


function TodoItem(props) {
  const deleteTodoHandler = async (title) => {
    await axios.delete(`http://localhost:8000/api/todo/${title}`)
  }

  return(
    <>
      <div className='d-flex justify-content-between align-items-center p-0 m-0'>
        <p className='m-0' style={{textAlign: 'start'}}>
          <span style={{ fontWeight: 'bold' }}>{props.todo.title}</span>
          <span>: {props.todo.description}</span>
        </p>
        <button className="btn btn-danger my-2 mx-1" onClick={() => deleteTodoHandler(props.todo.title)}>Delete</button>
      </div>
      <hr/>
    </>
  )
}

export default TodoItem