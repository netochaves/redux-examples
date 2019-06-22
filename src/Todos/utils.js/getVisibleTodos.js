import * as filters from "../filters"

export const getVisibleTodos = (filter, todos) => {
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
