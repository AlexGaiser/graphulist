import React from 'react'

const ListItem = (props) => {


  return (
    <div onClick={props.setEditItem} id={props.id} className="list-item-container">
      I'm list item {props.item.name}
    </div>
  )
}

export default ListItem