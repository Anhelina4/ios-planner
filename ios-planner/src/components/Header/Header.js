import React, { useState, useEffect } from "react"
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
  const { children, color, variant, displayBtn, setDisplayBtn } = props
  const { showtsf, setShowTSF, state } = usePlannerContext()
  const { switchComponent } = usePlannerActions()
  const [counterDone, setCounterDone] = useState()
  const [counterUndone, setCounterUndone] = useState()

  let sum = 0
  let sumUndone = 0

  useEffect(() => {
    state?.currentCategory?.tasksList?.map(elem => {
      elem.status ? ++sum : ++sumUndone
    })
    setCounterDone(sum)
    setCounterUndone(sumUndone)
  }, [
    setCounterDone,
    setCounterUndone,
    state?.currentCategory?.tasksList,
    sum,
    sumUndone,
  ])

  return (
    <>
      <ButtonWrapper>
        <Button
          icon={<AiOutlinePlus />}
          size="xl"
          active
          onClick={() => switchComponent(setShowTSF, showtsf)}
        />
      </ButtonWrapper>
      <ContainerWrapper>
        <HeaderWrapper color={color} variant={variant}>
          {children}
        </HeaderWrapper>
        <Text
          children={counterUndone}
          size="xxl"
          color={color}
          variant={variant}
          className="title-extraBold"
        />
      </ContainerWrapper>
      <SubtitleWrapper className="pb-lg">
        <div className="d-flex ">
          <Button variant="disabled" size="sm">
            {counterDone} done
          </Button>
          <Button color={color} size="sm" active>
            &bull; Clear
          </Button>
        </div>
        <Button
          color={color}
          size="sm"
          active
          onClick={() => {
            setDisplayBtn(displayBtn === "Hide" ? "Show" : "Hide")
          }}>
          {displayBtn}
        </Button>
      </SubtitleWrapper>
    </>
  )
}

export default Header
