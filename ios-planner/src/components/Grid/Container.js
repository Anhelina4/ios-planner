import React from 'react'
import  ContainerWrapper  from "./Container.style"

const Container = (props) => {
    const {children, variant} = props
    return (
        <ContainerWrapper variant={variant} data-testid="container">{children}</ContainerWrapper>
    )
}

export default Container
