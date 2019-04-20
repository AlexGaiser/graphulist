import React from 'react'

const ListItem = (props) => {

  return (
    <div id={props.key} className="list-item-container">
      I'm list item {props.item.name}
    </div>
  )
}

export default ListItem