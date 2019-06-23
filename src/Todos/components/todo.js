import React from "react"
import PropTypes from "prop-types"

const Todo = ({ id, name, completed, onToggleTodo, onRemoveTodo }) => {
  return (
    <>
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
    </>
  )
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired
}

export default Todo
