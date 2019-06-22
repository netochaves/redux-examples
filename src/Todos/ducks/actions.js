import * as types from "./types"

const addTodo = name => ({
  type: types.ADD_TODO,
  name
})

const toggleTodo = id => ({
  type: types.TOGGLE_TODO,
  id
})

const setVisibilityFilter = filter => ({
  type: types.SET_VISIBILITY_FILTER,
  filter
})

const removeTodo = id => ({
  type: types.REMOVE_TODO,
  id
})

export { addTodo, toggleTodo, setVisibilityFilter, removeTodo }
