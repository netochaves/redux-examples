import * as types from "./types"
import { combineReducers } from "redux"

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          name: action.name,
          id: Math.random(),
          completed: false
        }
      ]
    case types.TOGGLE_TODO:
      return state.map(t =>
        t.id === action.id
          ? {
              ...t,
              completed: !t.completed
            }
          : t
      )
    default:
      return state
  }
}

const reducer = combineReducers({
  todosReducer
})

export default reducer
