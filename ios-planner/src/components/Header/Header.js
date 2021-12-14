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
        <Button icon={<AiOutlinePlus />} size="xl" active />
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
      <SubtitleWrapper className="pb-lg">
        <div className="d-flex ">
          <Button variant="disabled" size="sm">
            0 done
          </Button>
          <Button color={color} size="sm" active>
            &bull; Clear
          </Button>
        </div>
        <Button color={color} size="sm" active>
          Show
        </Button>
      </SubtitleWrapper>
    </>
  )
}

export default Header
