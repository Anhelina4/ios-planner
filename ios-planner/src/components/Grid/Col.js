import React from "react"
import ColWrapper from "./Col.style"

const Col = props => {
  const { children, className, cw, focused } = props

  return (
    <ColWrapper data-testid="col" className={className} cw={cw} focused={focused}>
      {children}
    </ColWrapper>
  )
}

export default Col
