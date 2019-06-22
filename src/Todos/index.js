import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { addTodo, toggleTodo } from "./ducks/actions"

const Todos = ({ todos, addTodo, toggleTodo }) => {
  let input
  console.log(todos)
  return (
    <div>
      <input ref={node => (input = node)} />
      <button
        onClick={event => {
          event.preventDefault()
          addTodo(input.value)
          input.value = ""
        }}
      >
        Add Todo
      </button>
      {todos.map(todo => (
        <li
          key={todo.id}
          onClick={() => {
            toggleTodo(todo.id)
          }}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.name}
        </li>
      ))}
    </div>
  )
}

const mapStateToProps = state => ({
  todos: state.todosReducer
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addTodo, toggleTodo }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)
