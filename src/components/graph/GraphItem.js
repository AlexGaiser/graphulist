import React from 'react'

const GraphItem = (props) => {
  props.setEditItem(e.currentTarget.id)

  return (
    <div onClick={} id={props.id} className="graph-item-container">
      I'm graph item {props.item.name}
    </div>
  )
}

export default GraphItem