import Navigator from "./pages/Navigator"
import "./styles/style.css"
import { Button, Counter } from "./components"
import { MdAddCircleOutline, MdAddCircle, MdClose } from "react-icons/md"
import { AiOutlinePlus } from "react-icons/ai"
function App() {
  return (
    <>
      <Button icon={<MdAddCircleOutline />} size="20px" />
      <Button icon={<MdAddCircle />} size="20px" />
      <Button icon={<MdClose />} size="20px" />
      <Button icon={<AiOutlinePlus />} size="28px" hovered active></Button>
      <Button text="Hello" color="#157EFB" fontSize="14px" />
      <Button
        text="New List"
        color="#157EFB"
        fontSize="14px"
        icon={<MdAddCircleOutline />}
      />

      <Counter theme="#4e4d4d" size="16px" count="0" />
      <Counter theme="#4e4d4d" size="20px" count="0" />
      <Counter theme="#4e4d4d" size="40px" count="0" />
      <Counter theme="#929292" size="16px" count="0" />
      <Counter theme="#929292" size="20px" count="0" />
      <Counter theme="#929292" size="40px" count="0" />
      <Counter theme="#929292" count="0" />
    </>
  )
}

export default App
