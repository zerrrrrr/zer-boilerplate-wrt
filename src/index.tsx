import { createRoot } from 'react-dom/client'
import { useEffect, useState } from 'react'
import 'normalize.css/normalize.css'
import './style/global.styl'
import { Typography } from 'antd'

const Counter = () => {
  const [count, setCount] = useState(1)
  useEffect(() => {
    const t = setInterval(() => {
      setCount((e) => e + 1)
    }, 500)
    return () => {
      clearInterval(t)
    }
  }, [])
  return <Typography.Title level={3}>counter: {count}</Typography.Title>
}
const Label = () => <Typography.Title>Hello, world! {NODE_ENV}</Typography.Title>

const App = () => {
  return (
    <div>
      <Label />
      <Counter />
    </div>
  )
}

const container = document.getElementById('app')
if (container) {
  const root = createRoot(container)
  root.render(<App />)
}
