import React from "react"
import {
  HeaderWrapper,
  ContainerWrapper,
  ButtonWrapper,
  SubtitleWrapper,
} from "./Header.style"
import { Text, Button } from ".."
import { AiOutlinePlus } from "react-icons/ai"

const Header = props => {
  const { children, color, variant } = props

  return (
    <>
      <ButtonWrapper>
        <Button icon={<AiOutlinePlus />} size="xl" hovered active />
      </ButtonWrapper>
      <ContainerWrapper>
        <HeaderWrapper color={color} variant={variant}>
          {children}
        </HeaderWrapper>
        <Text
          children="0"
          size="xxl"
          color={color}
          variant={variant}
          className="title-extraBold"
        />
      </ContainerWrapper>
      <SubtitleWrapper>
        <div className="d-flex">
          <Button variant="disabled">0 done</Button>
          <Button color={color}>&bull; Clear</Button>
        </div>
        <Button color={color}>Show</Button>
      </SubtitleWrapper>
    </>
  )
}

export default Header
