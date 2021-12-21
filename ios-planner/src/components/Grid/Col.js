import React from "react"
import ColWrapper from "./Col.style"

const Col = props => {
  const { children, className, cw, focused, onClick } = props

  return (
    <ColWrapper data-testid="col" className={className} cw={cw} focused={focused} onClick={onClick}>
      {children}
    </ColWrapper>
  )
}

export default Col
