import React from "react"
import PropTypes from "prop-types"

const Link = ({ active, onClickFilter, text }) => {
  return (
    <>
      <button disabled={active} onClick={onClickFilter}>
        {text}
      </button>
    </>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  onClickFilter: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Link
