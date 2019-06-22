import React from "react"
import { AddTodo, Footer, TodoList } from "./containers"

const Todos = ({ filter, todos, setVisibilityFilter }) => {
  return (
    <>
      <AddTodo />
      <TodoList />
      <Footer />
    </>
  )
}
export default Todos
