import Input from "./input/text/Input"
import Button from "./button/common/Button"

interface IForm {
  title: string;
  value: string;
  setValue: Function
  list: string[]
  setList: Function
  setTab: Function
}

const Form = ({ title, value, setValue, list, setList, setTab }: IForm) => {

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setValue(value)
    setList([...list, value])
    setTab("list")
    setValue("")
    console.log("Form:", value)
  }

  return (
    <div>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <Input value={value} setValue={setValue} />
        <Button bgColor="purple">送信</Button>
      </form>
    </div>
  )
}

export default Form

