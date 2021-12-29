import React, { useEffect, useState } from "react"
import SiderWrapper from "./Sider.style"
import { SearchInput, Button, Switcher, Title, Container, Row, Col } from ".."
import { CategoryList } from "../../domains/Category/components"
import { AiOutlineSearch, AiFillCloseCircle, AiFillFlag } from "react-icons/ai"
import {
  BsCalendar3,
  BsCalendarDate,
  BsInboxFill,
  BsCircleFill,
} from "react-icons/bs"
import { MdAddCircleOutline } from "react-icons/md"
import { usePlannerActions, usePlannerContext } from "../../contexts/hooks"
import { useTaskActions } from "../../domains/Task/hooks"

const Sider = () => {
  const { switchComponent } = usePlannerActions()
  const { showcsf, setShowCSF, state } = usePlannerContext()
  const { filterAll, filterFlagged } = useTaskActions()
  const [counter, setCounter] = useState()
  const [counterFlag, setCounterFlag] = useState()

  let sum = 0
  let flaggedSum = 0

  useEffect(() => {
    state?.categories.map(item => {
      if (item) {
        item?.tasksList.map(elem => {
          elem.flag ? ++flaggedSum : ++sum
        })
      }
    })
    setCounter(sum)
    setCounterFlag(flaggedSum)
  }, [state, flaggedSum, sum])

  return (
    <Container height="100%">
      <SiderWrapper>
        <Row>
          <Col className="mb-xl">
            <BsCircleFill color="red" className="mr-lg" size="12px" />
            <BsCircleFill color="#f5c825" className="mr-lg" size="12px" />
            <BsCircleFill color="#68cf19" size="12px" />
          </Col>
        </Row>
        <Row>
          <Col cw="12">
            <SearchInput
              prefix={<AiOutlineSearch />}
              sufix={<Button icon={<AiFillCloseCircle />} />}
            />
          </Col>
        </Row>
        <Row>
          <Col className="mr-xl mt-xxl">
            <Switcher
              id="today"
              icon={<BsCalendar3 />}
              variant="blue"
              children="Today"
              path="/categories/today"
            />
          </Col>
          <Col className="mt-xxl">
            <Switcher
              id="scheduled"
              icon={<BsCalendarDate />}
              variant="red"
              children="Scheduled"
              path="/categories/scheduled"
            />
          </Col>
        </Row>
        <Row>
          <Col className="mr-xl mt-xl">
            <Switcher
              icon={<BsInboxFill />}
              id="all"
              variant="darkGrey"
              children="All"
              path="/categories/all"
              counter={counter}
              filter={filterAll}
            />
          </Col>
          <Col className="mt-xl">
            <Switcher
              id="withflag"
              icon={<AiFillFlag />}
              variant="orange"
              children="With flag"
              path="/categories/withflag"
              counter={counterFlag}
              filter={filterFlagged}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Title size="sm" children="My lists" variant="secondary" />
          </Col>
        </Row>
        <Row height="380px">
          <Col height="380px">
            <CategoryList display={showcsf} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              size="md"
              variant="secondary"
              children="New List"
              icon={<MdAddCircleOutline />}
              className="position-bottom"
              onClick={() => switchComponent(setShowCSF, showcsf)}
            />
          </Col>
        </Row>
      </SiderWrapper>
    </Container>
  )
}

export default Sider
