import { useState } from 'react';
import './App.css';
import { langs } from "./const/langs"
import Form from './components/Form';
import Header from './components/Header';
import List from './components/List';

function App() {

  const [tab, setTab] = useState("list")

  const [value, setValue] = useState("")

  const [list, setList] = useState(langs)

  return (
    <div className="App">
      <Header setTab={setTab} />
      {
        tab === "list" ?
          <List list={list} title="リスト" /> :
          <Form value={value} setValue={setValue} list={list} setList={setList} setTab={setTab} title="フォーム" />
      }
    </div>
  );
}

export default App;
