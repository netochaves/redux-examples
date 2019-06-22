import React from "react"

const Link = ({ active, onClickFilter, text }) => {
  return (
    <div>
      <button disabled={active} onClick={onClickFilter}>
        {text}
      </button>
    </div>
  )
}
export default Link
