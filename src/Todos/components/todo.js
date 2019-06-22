import React from "react"

const Todo = ({ id, name, completed, onToggleTodo, onRemoveTodo }) => {
  return (
    <div>
      <li
        key={id}
        onClick={onToggleTodo}
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {name}
        <button style={{ marginLeft: 10 }} onClick={onRemoveTodo}>
          remove
        </button>
      </li>
    </div>
  )
}
export default Todo
