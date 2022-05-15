import React from 'react'
import Hooks from './hooks/parent'
import Router from './lazy-loading/router'

const App = () => {
  return (
    <div>
      <h1>React advanced performance techniques</h1>

      {/* <Router /> */}
      <Hooks />
    </div>
  )
}

export default App
