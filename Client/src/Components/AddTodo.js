import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
  const Navigate = useNavigate();
  const [Title, setTitle] = useState("");
  const [Link, setLink] = useState("");
  const [ICON_URL, setICON_URL] = useState("");
  const [Note, setNote] = useState("");
  const [Id, setId] = useState();
  const [Date, setDate] = useState();
  //Getting Date
  useEffect(() => {
    var date = new window.Date();
    setDate(date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear());
  }, []);
  //Back
  const back = () => {
    Navigate("/");
  };
  //AddTodo
  const Add = async (e) => {
    e.preventDefault();
    setId(Id + 1);
    const data = await fetch("/addtodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Id,
        Title,
        Link,
        ICON_URL,
        Note,
        Date,
      }),
    });
    Navigate("/");
  };
  return (
    <div className="todoContainer">
      <div>
        <h1 className="header">NEW TODO</h1>
      </div>
      <div>
        <label className="center">Title:</label>
        <br />
        <input
          type="text"
          name="text"
          onChange={(text) => {
            setTitle(text.target.value);
          }}
        />
      </div>
      <div>
        <label className="center">Link:</label>
        <br />
        <input
          type="text"
          name="text"
          onChange={(text) => {
            setLink(text.target.value);
          }}
        />
      </div>
      <div>
        <label>ICON URL:</label>
        <br />
        <input
          type="text"
          name="text"
          onChange={(text) => {
            setICON_URL(text.target.value);
          }}
        />
      </div>
      <div>
        <label>Note:</label>
        <br />
        <input
          type="text"
          name="text"
          onChange={(text) => {
            setNote(text.target.value);
          }}
        />
      </div>
      <div>
        <button className="add" onClick={Add}>
          ADD
        </button>
      </div>
      <div>
        <button className="home" onClick={back}>
          HOME
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
