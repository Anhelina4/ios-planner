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

const Sider = props => {
  const { switchComponent } = usePlannerActions()
  const { showcsf, setShowCSF } = usePlannerContext()
  
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
              icon={<BsCalendar3 />}
              variant="blue"
              children="Today"
              path="/today"
            />
          </Col>
          <Col className="mt-xxl">
            <Switcher
              icon={<BsCalendarDate />}
              variant="red"
              children="Scheduled"
              path="/scheduled"
            />
          </Col>
        </Row>
        <Row>
          <Col className="mr-xl mt-xl">
            <Switcher
              icon={<BsInboxFill />}
              variant="darkGrey"
              children="All"
              path="/all"
            />
          </Col>
          <Col className="mt-xl">
            <Switcher
              icon={<AiFillFlag />}
              variant="orange"
              children="With flag"
              path="/withflag"
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
