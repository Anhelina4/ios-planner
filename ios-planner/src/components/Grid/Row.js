import React from "react"
import RowWrapper from "./Row.style"

const Row = props => {
  const { children, className, ...rest } = props

  return (
    <RowWrapper data-testid="row" className={className} {...rest}>
      {children}
    </RowWrapper>
  )
}

export default Row
