import React, { useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'
import { render } from 'react-dom'

import './style/global.styl'

const Counter = () => {
  const [count, setCount] = useState(1)
  useEffect(() => {
    const t = setInterval(() => {
      setCount(e => e + 1)
    }, 500)
    return () => {
      clearInterval(t)
    }
  }, [])
  return <h1>counter: {count}</h1>
}
const Label = () => <h1>Hello, world! {NODE_ENV}</h1>

const App = hot(() => {
  return (
    <div>
      <Label />
      <Counter />
    </div>
  )
})

render(<App />, document.getElementById('app'))
