import React from "react"
import RowWrapper from "./Row.style"

const Row = props => {
  const { children } = props

  return <RowWrapper>{children}</RowWrapper>
}

export default Row
