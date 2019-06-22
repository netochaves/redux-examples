import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { addTodo, toggleTodo, setVisibilityFilter } from "./ducks/actions"
import * as filters from "./filters"

const Todos = ({ filter, todos, addTodo, toggleTodo, setVisibilityFilter }) => {
  let input
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
      <br />
      <button
        disabled={filter === filters.SHOW_ALL}
        onClick={() => setVisibilityFilter(filters.SHOW_ALL)}
      >
        Show All
      </button>
      <button
        disabled={filter === filters.SHOW_ACTIVE}
        onClick={() => setVisibilityFilter(filters.SHOW_ACTIVE)}
      >
        Show Actives
      </button>
      <button
        disabled={filter === filters.SHOW_COMPLETED}
        onClick={() => setVisibilityFilter(filters.SHOW_COMPLETED)}
      >
        Show Completed
      </button>
    </div>
  )
}

const getVisibleTodos = (filter, todos) => {
  switch (filter) {
    case filters.SHOW_ALL:
      return todos
    case filters.SHOW_ACTIVE:
      return todos.filter(todo => todo.completed === false)
    case filters.SHOW_COMPLETED:
      return todos.filter(todo => todo.completed === true)
    default:
      throw new Error("Invalid filter")
  }
}

const mapStateToProps = state => ({
  filter: state.filterReducer,
  todos: getVisibleTodos(state.filterReducer, state.todosReducer)
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addTodo, toggleTodo, setVisibilityFilter }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)
