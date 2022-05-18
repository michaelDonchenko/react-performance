import React from 'react'

const Button = ({ onClick }) => {
  console.log('Rednder of the Button!')
  return <button onClick={onClick}>Click on me</button>
}

export const MemoizedButton = React.memo(Button)
