import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { addTodo } from "../ducks/actions"

const AddTodo = ({ addTodo }) => {
  let input
  return (
    <div>
      <input ref={node => (input = node)} />
      <button
        onClick={event => {
          event.preventDefault()
          addTodo(input.value)
          input.value = ""
        }}
      >
        Add Todo
      </button>
    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({ addTodo }, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(AddTodo)
