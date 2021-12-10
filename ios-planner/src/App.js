import Navigator from "./pages/Navigator"
import "./styles/style.css"
import {
  Button,
  SearchInput,
  Title,
  Text,
  Checkbox,
  Switcher,
  Container,
  Row,
  Col,
} from "./components"
import { MdAddCircleOutline, MdAddCircle, MdClose } from "react-icons/md"
import { AiFillCloseCircle, AiOutlineSearch, AiFillFlag } from "react-icons/ai"
import { BsCalendar3, BsCalendarDate, BsInboxFill } from "react-icons/bs"
function App() {
  return (
    <>
      {/* Buttons  */}
      default --------------------------------------
      <Button children="Default Button" />
      <Button icon={<MdAddCircleOutline />} size="md" />
      <Button icon={<MdAddCircle />} size="md" />
      <Button icon={<MdClose />} size="md" />
      <Button children="Blue" color="blue" size="lg" />
      <Button children="Red" color="red" size="md" />
      <Button children="Orange" color="orange" size="sm" />
      <Button
        size="md"
        variant="secondary"
        children="Light Button"
        icon={<MdAddCircleOutline />}
      />
      <Button variant="primary">Dark Button</Button>
      {/* Text */}
      default --------------------------------------
      <Text>Default Text</Text>
      <Text children="0" size="xxl" variant="primary" />
      <Text children="0" size="lg" variant="secondary" />
      <Text children="0" size="xl" variant="disabled" />
      <Text children="My new task" size="xl" variant="primary" />
      <Text children="My new task" size="md" variant="secondary" />
      <Text children="My new task" size="lg" variant="disabled" />
      <Text children="My new task" size="lg" color="red" />
      <Text children="My new task" size="lg" color="orange" />
      <Text children="My new task" size="lg" color="blue" />
      <Text children="My new task" size="lg" />
      {/* InputSearch */}
      default --------------------------------------
      <SearchInput />
      <SearchInput
        prefix={<AiOutlineSearch />}
        sufix={<Button icon={<AiFillCloseCircle />} />}
      />
      {/* Title */}
      default --------------------------------------
      <Title>Default Title</Title>
      <Title size="md" children="New List" />
      <Title size="md" children="New List" color="red" />
      <Title size="lg" children="New List" color="orange" />
      <Title size="lg" children="New List" color="blue" />
      <Title size="lg" children="New List" variant="primary" />
      <Title size="lg" children="New List" variant="secondary" />
      <Title size="lg" children="New List" variant="disabled" />
      {/* Checkbox */}
      <Checkbox />
      <Checkbox checked={true} color="red" />
      <Checkbox checked={true} color="orange" />Task2
      <Checkbox checked={true} variant="primary" />
      <Checkbox checked={true} variant="secondary" />
      <Checkbox checked={false} />
      <Checkbox checked={true} />
      {/* Switcher */}
      <div>
        <br />
      </div>
      default --------------------------------------
      <Switcher />
      <Switcher icon={<BsCalendar3 />} variant="blue" />
      <Switcher icon={<BsCalendarDate />} variant="red" />
      <Switcher icon={<BsInboxFill />} variant="darkGrey" />
      <Switcher icon={<AiFillFlag />} variant="orange" />
      <Switcher icon={<AiFillFlag />} variant="lightGrey" />
      {/* Grid.Containers */}
      <Container>container</Container>
      <Container variant="sm">sm</Container>
      <Container variant="md">md</Container>
      <Container variant="lg">lg</Container>
      <Container variant="xl">xl</Container>
      <Container variant="xxl">xxl</Container>
      <Container variant="fluid">container-fluid</Container>
      {/* Grid.Row */}
      <Row></Row>
      <Container>
        <Row>Hey</Row>
        <Row>Jude</Row>
        <Row>Again</Row>
      </Container>
      {/* Grid.cols */}
      <Container>
        <Row>
          <Col cw={3}>3</Col>
          <Col cw={3}>3</Col>
          <Col cw={6}>6</Col>
        </Row>
        <Row>
          <Col cw="auto">col</Col>
          <Col>col</Col>
        </Row>
      </Container>
    </>
  )
}

export default App
