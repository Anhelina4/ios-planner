import React from "react"
import ColWrapper from "./Col.style"

const Col = props => {
  const { children, ...rest } = props

  return (
    <ColWrapper data-testid="col" {...rest}>
      {children}
    </ColWrapper>
  )
}

export default Col
