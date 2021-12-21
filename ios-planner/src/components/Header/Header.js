import React from "react"
import {
  HeaderWrapper,
  ContainerWrapper,
  ButtonWrapper,
  SubtitleWrapper,
} from "./Header.style"
import { Text, Button } from ".."
import { AiOutlinePlus } from "react-icons/ai"
import { usePlannerContext } from "../../contexts/hooks"
import { usePlannerActions } from "../../contexts/hooks"

const Header = props => {
  const { children, color, variant } = props
  const { showtsf, setShowTSF } = usePlannerContext()
  const { switchComponent } = usePlannerActions()
  return (
    <>
      <ButtonWrapper>
        <Button
          icon={<AiOutlinePlus />}
          size="xl"
          active
          onClick={()=>switchComponent(setShowTSF, showtsf)}
        />
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
