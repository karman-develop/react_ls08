import { useState } from "react"
import styled from "styled-components"

interface IHeader {
  setTab: Function
}

const Header = ({ setTab }: IHeader) => {
  
  const isList = (txt: string) => {
    setTab(txt)
  }

  return (
    <div>
      <h1>ヘッダー</h1>
      <ul>
        <ListSt onClick={()=> isList("list")}>リスト</ListSt>
        <ListSt onClick={()=> isList("form")}>フォーム</ListSt>
      </ul>
      <hr />
    </div>
  )
}

export default Header

const ListSt = styled.li`
  cursor: pointer;
`