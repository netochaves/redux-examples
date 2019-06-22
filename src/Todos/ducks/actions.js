import * as types from "./types"

const addTodo = name => ({
  type: types.ADD_TODO,
  name
})

const toggleTodo = id => ({
  type: types.TOGGLE_TODO,
  id
})

export { addTodo, toggleTodo }
