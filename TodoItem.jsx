import React from 'react'

const TodoItem = ({todo}) => {
  return (
    <div>
     <h3>{todo.title}</h3>
     <p>{todo.desc}</p>
    </div>
  )
}

export default TodoItem
