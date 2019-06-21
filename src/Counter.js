import React from "react"
import { connect } from "react-redux"

const App = ({ count, dispatch }) => {
  const increment = () => {
    dispatch({ type: "INCREMENT" })
  }
  const decrement = () => {
    dispatch({ type: "DECREMENT" })
  }
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      {count}
    </div>
  )
}

const mapStateToProps = state => ({
  count: state.count
})

export default connect(mapStateToProps)(App)
