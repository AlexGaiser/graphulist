import React from 'react'

const GraphItem = (props) => {

  return (
    <div id={props.key} className="graph-item-container">
      I'm graph item {props.item.name}
    </div>
  )
}

export default GraphItem