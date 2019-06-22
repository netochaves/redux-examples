import React from "react"
import * as filters from "../filters"
import { Link } from "../components"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { setVisibilityFilter } from "../ducks/actions"

const Footer = ({ filter, setVisibilityFilter }) => (
  <>
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

const mapStateToProps = state => ({
  filter: state.filterReducer
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setVisibilityFilter }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)
