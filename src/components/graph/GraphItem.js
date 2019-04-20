import React from 'react'

const GraphItem = (props) => {

  return (
    <div onClick={props.setEditItem} id={props.id} className="graph-item-container">
      I'm graph item {props.item.name}
    </div>
  )
}

export default GraphItem