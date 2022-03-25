import { ReactChild, ReactFragment, ReactPortal, Key } from "react";

interface IList {
  title: string;
  list: string[]
}

const List = ({title, list}: IList) => {

  return (
    <div>
      <h2>{title}</h2>
      <ul>
      {
        list.map((txt: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined, index: Key | null | undefined)=> (
          <li key={index}>{txt}</li>
        ))
      }
      </ul>
    </div>
  )
}

export default List