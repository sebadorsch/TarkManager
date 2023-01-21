import React from 'react';
import TodoItem from './Todo'

function TodoView(props) {
    return (
        <div>
            <ul className='p-0 mb-5'>
                {props.todoList.map(todo => <TodoItem todo={todo}/>)}
            </ul>
        </div>
    )
}

export default TodoView