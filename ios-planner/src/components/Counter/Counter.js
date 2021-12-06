import React from "react"
import CounterItem from "./CounterItem.style"

const Counter = props => {
  return (
    <CounterItem theme={props.theme} size={props.size}>
      {props.count}
    </CounterItem>
  )
}

export default Counter
