import React from "react"
import RowWrapper from "./Row.style"

const Row = props => {
  const { children } = props

  return <RowWrapper data-testid="row">{children}</RowWrapper>
}

export default Row
