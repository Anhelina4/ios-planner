import React from "react"
import ContainerWrapper from "./Container.style"

const Container = props => {
  const { children, variant, className, height } = props

  return (
    <ContainerWrapper
      variant={variant}
      data-testid="container"
      className={className}
      height={height}>
      {children}
    </ContainerWrapper>
  )
}

export default Container
