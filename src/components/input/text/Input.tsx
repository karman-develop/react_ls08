import styled from "styled-components"

interface IInput {
  value: string
  setValue: Function
}

const Input = ({value, setValue}: IInput) => {
  return (
    <>
      <InputSt type="text" value={value} onChange={(e)=> setValue(e.target.value)} />
    </>
  )
}

export default Input

const InputSt = styled.input`
  border: 1px solid #efefef;
  margin-right: 20px;
  padding: 15px 20px;
  &:focus {
    border: 1px solid #000000; 
    z-index: 10;
    outline: 0;
  }
`