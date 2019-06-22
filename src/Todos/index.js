import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { AddTodo, Todo, Link } from "./components"
import { toggleTodo, setVisibilityFilter, removeTodo } from "./ducks/actions"
import * as filters from "./filters"

const Todos = ({
  filter,
  todos,
  toggleTodo,
  setVisibilityFilter,
  removeTodo
}) => {
  return (
    <>
      <AddTodo />
      {todos.map(todo => (
        <Todo
          {...todo}
          onToggleTodo={() => toggleTodo(todo.id)}
          onRemoveTodo={() => removeTodo(todo.id)}
        />
      ))}
      <br />
      <div />
      <Link
        active={filter === filters.SHOW_ALL}
        onClickFilter={() => setVisibilityFilter(filters.SHOW_ALL)}
        text="Show All"
      />
      <Link
        active={filter === filters.SHOW_ACTIVE}
        onClickFilter={() => setVisibilityFilter(filters.SHOW_ACTIVE)}
        text="Show Active"
      />
      <Link
        active={filter === filters.SHOW_COMPLETED}
        onClickFilter={() => setVisibilityFilter(filters.SHOW_COMPLETED)}
        text="Show Completed"
      />
    </>
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
  bindActionCreators({ toggleTodo, setVisibilityFilter, removeTodo }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)
