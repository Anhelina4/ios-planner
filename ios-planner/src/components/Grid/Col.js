import React from "react"
import ColWrapper from "./Col.style"

const Col = props => {
  const { children, className, cw } = props

  return (
    <ColWrapper data-testid="col" className={className} cw={cw}>
      {children}
    </ColWrapper>
  )
}

export default Col
