import React from "react";
const Todo = (props) => {
  return (
    <tr className="display-flex gradient" draggable>
      <input
        type="checkbox"
        className="item1 click"
        onClick={props.Checked}
        onChange={() => {
          console.log(props._id);
        }}
        htmlFor="title"
      />
      <td className="item2 center" name="title">
        {props.Title}
      </td>
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
