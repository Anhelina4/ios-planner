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
import { useTaskActions } from "../../domains/Task/hooks"

const Header = props => {
  const { children, color, variant } = props
  const { showtsf, setShowTSF, state } = usePlannerContext()
  const { switchComponent } = usePlannerActions()
  const { filterChecked, clearAll } = useTaskActions()
  const [btnState, setBtnState] = useState("Hide")
  const [clear, setClear] = useState(false)
  const [counterDone, setCounterDone] = useState()
  const [counterAll, setCounterAll] = useState()

  let sum = 0
  let sumAll = 0

  useEffect(() => {
    state?.categories?.map(item => {
      if (item?.categoryId === state?.currentCategory?.categoryId) {
        item?.tasksList.map(elem => {
          if (elem.status === true) {
            ++sum
          }
          ++sumAll
        })
      }
      setCounterDone(sum)
      setCounterAll(sumAll)
    })
  }, [state, sum, sumAll])

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
          children={counterAll - counterDone}
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
          <Button
            color={color}
            size="sm"
            active
            onClick={() => {
              setClear(true)
              clearAll(
                state.currentCategory.categoryName,
                state.currentCategory.categoryId,
                clear
              )
            }}>
            &bull; Clear
          </Button>
        </div>
        <Button
          color={color}
          size="sm"
          active
          onClick={() => {
            filterChecked(
              state.currentCategory.categoryName,
              state.currentCategory.categoryId,
              btnState
            )
            setBtnState(btnState === "Hide" ? "Show" : "Hide")
          }}>
          {btnState}
        </Button>
      </SubtitleWrapper>
    </>
  )
}

export default Header
