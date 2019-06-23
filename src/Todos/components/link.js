import React from "react"

const Link = ({ active, onClickFilter, text }) => {
  return (
    <>
      <button disabled={active} onClick={onClickFilter}>
        {text}
      </button>
    </>
  )
}
export default Link
