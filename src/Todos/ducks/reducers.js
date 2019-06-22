import * as types from "./types"
import * as filters from "../filters"
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

const filterReducer = (state = filters.SHOW_ALL, action) => {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const reducer = combineReducers({
  todosReducer,
  filterReducer
})

export default reducer
