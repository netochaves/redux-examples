import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { AddTodo, Link, TodoList } from "./components"
import { setVisibilityFilter } from "./ducks/actions"
import * as filters from "./filters"

const Todos = ({ filter, todos, setVisibilityFilter }) => {
  return (
    <>
      <AddTodo />
      <TodoList />
      <br />
      <Link
        active={filter === filters.SHOW_ALL}
        onClickFilter={() => setVisibilityFilter(filters.SHOW_ALL)}
        text="Show All"
      />
      <Link
        active={filter === filters.SHOW_ACTIVE}
        onClickFilter={() => setVisibilityFilter(filters.SHOW_ACTIVE)}
        text="Show Active"
      />
      <Link
        active={filter === filters.SHOW_COMPLETED}
        onClickFilter={() => setVisibilityFilter(filters.SHOW_COMPLETED)}
        text="Show Completed"
      />
    </>
  )
}

const mapStateToProps = state => ({
  filter: state.filterReducer
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setVisibilityFilter }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)
