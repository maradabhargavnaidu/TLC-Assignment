import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTodo = () => {
  const Navigate = useNavigate();
  const [data, setData] = useState({});
  const [Date, setDate] = useState();
  const { Id } = useParams();
  function fetchData() {
    fetch("http://localhost:5000/getTodo/" + Id, { method: "GET" })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    fetchData();
    var date = new window.Date();
    setDate(date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear());
  }, []);

  //Back
  const back = () => {
    Navigate("/");
  };
  //UpdateTodo
  const update = async (e) => {
    e.preventDefault();
    console.log(data);
    const todoupdate = await fetch("/updatetodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: Id,
        Title: data.Title,
        Link: data.Link,
        ICON_URL: data.ICON_URL,
        Note: data.Note,
        Date,
      }),
    });
    // .then((res) => res.json())
    // .then((response) => console.log("Success:", response))
    // .catch((error) => console.error("Error:", error));
  };
  return (
    <div className="todoContainer">
      <div>
        <h1 className="header">UPDATE TODO</h1>
      </div>
      <div>
        <label className="center">Title:</label>
        <br />
        <input
          type="text"
          name="text"
          value={data.Title}
          onChange={(e) => {
            setData({ ...data, Title: e.target.value });
          }}
        />
      </div>
      <div>
        <label className="center">Link:</label>
        <br />
        <input
          type="text"
          name="text"
          value={data.Link}
          onChange={(e) => {
            setData({ ...data, Link: e.target.value });
          }}
        />
      </div>
      <div>
        <label>ICON URL:</label>
        <br />
        <input
          type="text"
          name="text"
          value={data.ICON_URL}
          onChange={(e) => {
            setData({ ...data, ICON_URL: e.target.value });
          }}
        />
      </div>
      <div>
        <label>Note:</label>
        <br />
        <input
          type="text"
          name="text"
          value={data.Note}
          onChange={(e) => {
            setData({ ...data, Note: e.target.value });
          }}
        />
      </div>
      <div>
        <button className="update" onClick={update}>
          UPDATE
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

export default UpdateTodo;
