import React from "react"
import CounterItem from "./CounterItem.style"

const Counter = props => {
  const {theme, size, fontWeight, count} = props
  return (
    <CounterItem theme={theme} size={size} fontWeight={fontWeight}>
      {count}
    </CounterItem>
  )
}

export default Counter
