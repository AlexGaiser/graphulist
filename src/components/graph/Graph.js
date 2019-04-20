import React from 'react'
import GraphItem from '../list/ListItem';

const Graph = (props) => {
  let graphItems = props.items.map((item, key) => {
    return (
      <GraphItem item={item} key={key} />
    )
  })

  return (
    <div className="graph-container">
      I'm the graph
      {graphItems}
    </div>
  )
}

export default Graph