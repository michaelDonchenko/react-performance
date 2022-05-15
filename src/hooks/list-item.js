import React from 'react'

const ListItem = ({ text }) => {
  console.log('Render of list item!')
  return <div>{text}</div>
}

export const MemoizedListItem = React.memo(ListItem)
