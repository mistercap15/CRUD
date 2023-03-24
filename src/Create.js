import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Create = () => {
  const [task, setTask] = useState("");
  const [remark, setRemark] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clciekd");
    axios
      .post("https://641d79ca1a68dc9e461fda31.mockapi.io/users", {
        task: task,
        remark: remark,
      })
      .then(() => {
        history("/read");
      });
  };

  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <h1>Create A Todo List</h1>
        <Link to="/read">
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>
      <form>
        <div className="mb-3">
          <label className="form-label">Task</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setTask(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Remark</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => setRemark(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;