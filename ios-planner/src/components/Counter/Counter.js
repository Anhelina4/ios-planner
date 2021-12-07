import React from "react"
import CounterItem from "./CounterItem.style"

const Counter = props => {
  const {color, size, fontWeight, count, className} = props
  return (
    <CounterItem color={color} size={size} fontWeight={fontWeight} className={className}>
      {count}
    </CounterItem>
  )
}

export default Counter
