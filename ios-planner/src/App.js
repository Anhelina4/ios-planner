import Navigator from "./pages/Navigator"
import "./styles/style.css"
import {
  Button,
  Counter,
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
      <Button icon={<MdAddCircleOutline />} size="md" />
      <Button icon={<MdAddCircle />} size="md" />
      <Button icon={<MdClose />} size="md" />
      <Button icon={<AiOutlinePlus />} size="lg" hovered active></Button>
      <Button
        size="md-text"
        color="var(--color-dark-lighten2)"
        text="New List"
        icon={<MdAddCircleOutline />}
        className="ml-xxl"
      />
      <Button
        size="md-text"
        text="New List"
        icon={<MdAddCircleOutline />}
        className="ml-xxl"
      />
      <Button
        size="sm-text"
        text="New List"
        icon={<MdAddCircleOutline />}
        className="ml-xxl"
      />

      <Counter size="lg" count="0" />
      <Counter size="md" count="0" />
      <Counter size="sm" count="0" className="ml-xxl" />

      <SearchInput
        icon1={<AiOutlineSearch />}
        button={<Button icon={<MdAddCircle />} size="md" />}
        color="var(--color-dark)"></SearchInput>

      <Title size="md" text="New List"></Title>
      <Title color="var(--color-red)" size="md" text="New List"></Title>
      <Title color="var(--color-blue)" size="sm" text="New List"></Title>

      <Text text="My new task"></Text>
      <Text
        text="My new task"
        color="var(--color-dark-lighten3)"
        size="sm"></Text>
      <Text
        text="My new task"
        color="var(--color-dark-lighten2)"
        size="md"></Text>
      <Text
        text="My new task"
        color="var(--color-dark-lighten0)"
        size="lg"></Text>
      <Text
        text="My new task"
        color="var(--color-dark-lighten1)"
        size="xl"></Text>

      <Checkbox checked={true} backgroundColor="var(--color-red)"></Checkbox>
      <Checkbox backgroundColor="var(--color-red)" checked={false}></Checkbox>
      <Checkbox checked={true}></Checkbox>
      <Checkbox />

      <Switcher icon={<BsCalendar3 />} backgroundColor="var(--color-blue)"></Switcher>
      <Switcher icon={<BsCalendarDate />} backgroundColor="var(--color-red)"></Switcher>
      <Switcher icon={<BsInboxFill />} backgroundColor="var(--color-dark-lighten0)"></Switcher>
      <Switcher icon={<AiFillFlag />} backgroundColor="var(--color-orange)"></Switcher>
    </>
  )
}

export default App
