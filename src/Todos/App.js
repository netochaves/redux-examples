import React from "react"
import Todos from "./"
import store from "./ducks/store"
import { Provider } from "react-redux"

export default function App() {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  )
}
