import React from 'react'
import  ContainerWrapper  from "./Container.style"

const Container = (props) => {
    const {children, variant} = props
    return (
        <ContainerWrapper variant={variant}>{children}</ContainerWrapper>
    )
}

export default Container
