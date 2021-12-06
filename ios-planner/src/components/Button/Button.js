import React from 'react'
import ButtonItem from "./ButtonItem.style"

const Button = (props) => {
    return (
        <ButtonItem hovered={props.hovered} active={props.active} size={props.size}>{props.icon}</ButtonItem>
    )
}

export default Button
