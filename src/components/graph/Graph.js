import React from 'react'
import GraphItem from '../list/ListItem';

const Graph = (props) => {
  console.log(props.items)
  let graphItems = props.items.map((item, key) => {
    return (
      <GraphItem setEditItem={props.setEditItem} id={item.id} item={item} key={key} />
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