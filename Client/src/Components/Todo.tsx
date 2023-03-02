import React from "react";
import { useState } from 'react'
const Todo = (props) => {
  const [index,setIndex] = useState(0);
  const onDragStart = (e:React.DragEvent<HTMLDivElement>,index:number) =>{
    console.log("drag Started",index)
  }
  const onDragEnter = (e:React.DragEvent<HTMLDivElement>,index:number) =>{
    console.log("drag Enter",index)
  }
  const onDragEnd = (e:React.DragEvent<HTMLDivElement>,index:number) =>{
    console.log("drag End",index)
  }
  return (
    <tr className="display-flex gradient" draggable 
    onDragStart={(e)=>onDragStart(e,index)}
     onDragEnter={(e) =>onDragEnter(e,index)}
     onDragEnd={(e)=>onDragEnd}>
      <td className="item1 center">{props._id}</td>
      <td className="item2 center">{props.Title}</td>
      <td className="item3 center">{props.Link}</td>
      <td className="item4 center">{props.ICON_URL}</td>
      <td className="item5 center">{props.Note}</td>
      <td className="item6 center">{props.Date}</td>
      <th className="item7 btncontainer">
        <button className="btns" onClick={props.Update}>
          <i className="fa-solid fa-pencil"></i>
        </button>
        <button className="btns" onClick={props.Delete}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </th>
    </tr>
  );
};

export default Todo;
