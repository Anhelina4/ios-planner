import React from 'react'
import TitleItem from './TitleItem.style'
const Title = (props) => {
    const {color, fontWeight, fontSize, text} = props
    return (
        <TitleItem color={color} fontWeight={fontWeight} fontSize={fontSize}>{text}</TitleItem>
    )
}

export default Title

