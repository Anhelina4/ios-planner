import Navigator from "./pages/Navigator"
import "./styles/style.css"
import { Button, Counter } from "./components"
import { MdAddCircleOutline, MdAddCircle, MdClose } from "react-icons/md"
import { AiOutlinePlus } from "react-icons/ai"
function App() {
  return (
    <>
      <Button icon={<MdAddCircleOutline />} size="var(--btn-md)" color="var(--color-red)" />
      <Button icon={<MdAddCircle />} size="var(--btn-md)" color="var(--color-orange)" />
      <Button icon={<MdClose />} size="var(--btn-md)" color="var(--color-dark)"/>
      <Button icon={<AiOutlinePlus />} size="var(--btn-lg)" color="var(--color-dark-lighten1)" hovered active></Button>
      <Button icon={<AiOutlinePlus />} size="var(--btn-lg)" color="var(--color-dark-lighten2)" hovered active></Button>
      <Button icon={<AiOutlinePlus />} size="var(--btn-lg)" color="var(--color-dark-lighten3)" hovered active></Button>
      <Button icon={<AiOutlinePlus />} size="var(--btn-lg)" color="var(--color-dark-lighten4)"  active></Button>
      <Button icon={<AiOutlinePlus />} size="var(--btn-lg)" color="var(--color-dark-lighten5)"  active></Button>
      <Button icon={<AiOutlinePlus />} size="var(--btn-lg)" color="var(--color-dark-lighten6)"  active></Button>
      <Button
        text="New List"
        color="var(--color-blue)"
        fontSize="var(--text-md)"
        icon={<MdAddCircleOutline />}
      />

      <Counter theme="var(--color-dark)" size="var(--text-lg)" count="0" />
      <Counter theme="var(--color-dark-lighten1)" size="var(--text-xl)" count="0" />
      <Counter theme="var(--color-dark-lighten2)" fontWeight="var(--text-bold)" size="var(--text-xxl)" count="0" />
      <Counter theme="var(--color-dark-lighten3)" size="var(--text-lg)" count="0" />
      <Counter theme="var(--color-dark-lighten4)" size="var(--text-xl)" count="0" />
      <Counter theme="var(--color-dark-lighten5)" size="var(--text-xxl)" count="0" />
      <Counter theme="var(--color-dark-lighten6)" count="0" />
    </>
  )
}

export default App
