import React, { useCallback, useState, useMemo } from 'react'
import { MemoizedButton } from './button'
import { MemoizedListItem } from './list-item'

const Parent = () => {
  const [counter, setCounter] = useState(0)
  const [data] = useState(['item1', 'item2', 'item3', 'item4'])
  const [number] = useState(1000000000)

  const onClick = useCallback(() => setCounter((counter) => counter + 1), [])

  const heavyFunction = (number) => {
    console.log('Render of the heavy function!')
    let result = 0
    for (let i = 0; i < number; i++) {
      result = result + i
    }

    return result
  }

  const memoizedResult = useMemo(() => heavyFunction(number), [number])
  // const memoizedResult = heavyFunction(number)

  return (
    <div>
      <MemoizedButton onClick={onClick} />

      <h3>Counter: {counter}</h3>
      <h3>Sum result: {memoizedResult}</h3>

      {data.map((item) => (
        <MemoizedListItem key={item} text={item} />
      ))}
    </div>
  )
}

export default Parent
