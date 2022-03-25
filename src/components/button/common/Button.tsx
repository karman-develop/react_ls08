import styled from 'styled-components';

interface IButton {
  bgColor: string
  children: string
}

const Button = ({ bgColor,children }: IButton) => {
  const BtnSt = styled.button`
    background-color: ${bgColor};
    border: 0;
    color: #fff;
    padding: 10px 20px;
  `;
  return (
    <>
      <BtnSt>{children}</BtnSt>
    </>
  )
}

export default Button


