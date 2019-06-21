import { createStore } from "redux"
import { countReducer } from "../src/reducers"

export const store = createStore(countReducer)
