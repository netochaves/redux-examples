import React from "react"
import Todo from "./todo"
import { connect } from "react-redux"
import { toggleTodo, removeTodo } from "../ducks/actions"
import { bindActionCreators } from "redux"
import { getVisibleTodos } from "../utils.js"

const TodoList = ({ todos, toggleTodo, removeTodo }) => (
  <div>
    {todos.map(todo => (
      <Todo
        {...todo}
        onToggleTodo={() => toggleTodo(todo.id)}
        onRemoveTodo={() => removeTodo(todo.id)}
      />
    ))}
  </div>
)

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.filterReducer, state.todosReducer)
})
const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleTodo, removeTodo }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
