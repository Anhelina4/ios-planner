import Navigator from "./pages/Navigator"
import "./styles/style.css"
import {
  Button,
  Counter,
  SearchInput,
  Title,
  Text,
  Checkbox,
} from "./components"
import { MdAddCircleOutline, MdAddCircle, MdClose } from "react-icons/md"
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai"
function App() {
  return (
    <>
      <Button icon={<MdAddCircleOutline />} size="md" />
      <Button icon={<MdAddCircle />} size="md" />
      <Button icon={<MdClose />} size="md" />
      <Button icon={<AiOutlinePlus />} size="lg" hovered active></Button>
      <Button
        color="var(--color-dark-lighten2)"
        text="New List"
        icon={<MdAddCircleOutline />}
        className="ml-xxl"
      />
      <Button
        text="New List"
        icon={<MdAddCircleOutline />}
        className="ml-xxl"
      />

      <Counter size="lg" count="0" />
      <Counter size="md" count="0" />
      <Counter size="sm" count="0" className="ml-xxl" />

      <SearchInput
        icon1={<AiOutlineSearch />}
        button={
          <Button
            icon={<MdAddCircle />}
            size="md"
          />
        }
        color="var(--color-dark)"></SearchInput>


      <Title
      color="var(--color-blue)"
        size="md"
        text="New List"></Title>
        <Title
      color="var(--color-blue)"
        size="sm"
        text="New List"></Title>

      <Text text="My new task"></Text>
      <Text
        text="My new task"
        color="var(--color-dark-lighten5)"
        size="sm"></Text>
      <Text
        text="My new task"
        color="var(--color-dark-lighten4)"
        size="md"></Text>
        <Text
        text="My new task"
        color="var(--color-dark-lighten3)"
        size="lg"></Text>
        <Text
        text="My new task"
        color="var(--color-dark-lighten2)"
        size="xl"></Text>

        
      <Checkbox checked={true} backgroundColor="red"></Checkbox>
      <Checkbox backgroundColor="red" checked={false}></Checkbox>
      <Checkbox checked={true}></Checkbox>
      <Checkbox />
    </>
  )
}

export default App
