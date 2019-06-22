import React from "react"
import { connect } from "react-redux"
import { increment, decrement } from "./actions"
import { bindActionCreators } from "redux"

const App = ({ count, increment, decrement }) => {
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <br />
      {count}
    </div>
  )
}

const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ increment, decrement }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
