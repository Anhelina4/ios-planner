import Navigator from "./pages/Navigator"
import "./styles/style.css"
import {
  Button,
  SearchInput,
  Title,
  Text,
  Checkbox,
  Switcher,
} from "./components"
import { MdAddCircleOutline, MdAddCircle, MdClose } from "react-icons/md"
import { AiOutlinePlus, AiOutlineSearch, AiFillFlag } from "react-icons/ai"
import { BsCalendar3, BsCalendarDate, BsInboxFill } from "react-icons/bs"
function App() {
  return (
    <>
      {/* Buttons  */}
      <Button icon={<MdAddCircleOutline />} size="md" />
      <Button icon={<MdAddCircle />} size="md" />
      <Button icon={<MdClose />} size="md" />
      <Button children="Text" color="blue" size="lg" />
      <Button children="Text" color="red" size="md" />
      <Button children="Text" color="orange" size="sm" />
      <Button
        size="md"
        color="light"
        children="New List"
        icon={<MdAddCircleOutline />}
      />

      {/* Text */}
      <Text children="0" size="xxl" color="dark" />
      <Text children="0" size="xl" />
      <Text children="0" size="lg" color="light" />
      <Text children="My new task" size="xl" color="dark" />
      <Text children="My new task" size="lg" />
      <Text children="My new task" size="md" color="light" />

      {/* InputSearch */}
      <SearchInput
        prefix={<AiOutlineSearch />}
        sufix={<Button icon={<MdAddCircle />} />}
      />

      {/* Title */}
      <Title size="md" children="New List" />
      <Title size="md" children="New List" color="red" />
      <Title size="lg" children="New List" color="orange" />
      <Title size="lg" children="New List" color="dark" />
      <Title size="lg" children="New List" color="light" />

      {/* Checkbox */}
      <Checkbox checked={true} color="red" />
      <Checkbox checked={true} color="orange" />
      <Checkbox checked={true} color="dark" />
      <Checkbox checked={true} color="light" />
      <Checkbox checked={false} />
      <Checkbox checked={true} />
      <Checkbox />

      {/* Switcher */}
      <Switcher icon={<BsCalendar3 />} bg="blue" />
      <Switcher icon={<BsCalendarDate />} bg="red" />
      <Switcher icon={<BsInboxFill />} bg="dark" />
      <Switcher icon={<AiFillFlag />} bg="orange" />
    </>
  )
}

export default App
