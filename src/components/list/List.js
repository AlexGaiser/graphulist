import React from 'react'
import ListItem from './ListItem'

const List = (props) => {
  let listItems = props.items.map((item, key) => {
    return (
      <ListItem item={item} key={key} />
    )
  })

  return (
    <div className="list-container">
      I'm the list
      {listItems}
    </div>
  )
}

export default List