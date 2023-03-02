import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Todo from "./Todo.tsx";

const TodoList = () => {
  const Navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  //AddTodo
  const AddTodo = () => {
    Navigate("/addtodo");
  };
  //UpdateTodo
  const update = (Id) => {
    Navigate("/updatetodo/" + Id);
  };
  //Fetching Data from DataBase
  function fetchData() {
    fetch("http://localhost:5000/getalltodos", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }

  //delete
  const del = async (_id) => {
    console.log(_id);
    const data = await fetch("http://localhost:5000/addtodo", {
      method: "DELETE",
      body: JSON.stringify({ _id }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => console.log("Success:", response))
      .catch((error) => console.error("Error:", error));
    window.location.reload();
  };

  return (
    <div className="listContainer">
      <div>
        <button className="btn" onClick={AddTodo}>
          Add Todo <i class="fa-solid fa-plus"></i>
        </button>
      </div>
      <div className="List">
        <table>
          <tr className="display-flex bg">
            <th className="item1">
              <i class="fa-solid fa-list"></i>
            </th>
            <th className="item2">
              <i class="fa-solid fa-quote-right"></i>
            </th>
            <th className="item3">
              <i class="fa-solid fa-link"></i>
            </th>
            <th className="item4">
              ICON <i class="fa-solid fa-link"></i>
            </th>
            <th className="item5">
              <i class="fa-solid fa-note-sticky"></i>
            </th>
            <th className="item6">
              <i class="fa-solid fa-calendar-days"></i>
            </th>
            <th className="item7">
              <i class="fa-solid fa-option"></i>
            </th>
          </tr>
          {data.map((e) => (
            <Todo
              id={e._id}
              Title={e.Title}
              Link={e.Link}
              ICON_URL={e.ICON_URL}
              Note={e.Note}
              Date={e.Date}
              Delete={() => del(e._id)}
              Update={() => update(e._id)}
            />
          ))}
        </table>
      </div>
    </div>
  );
};
export default TodoList;
