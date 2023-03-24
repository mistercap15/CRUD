import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [task, setTask] = useState("");
  const [remark, setRemark] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setTask(localStorage.getItem("task"));
    setRemark(localStorage.getItem("remark"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...", id);
    axios
      .put(`https://641d79ca1a68dc9e461fda31.mockapi.io/users/${id}`, {
        task: task,
        remark: remark,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <>
      <h2>Update your Task</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleUpdate}
        >
          Update
        </button>
        <Link to="/read">
          <button className="btn btn-secondary mx-2"> Back </button>
        </Link>
      </form>
    </>
  );
};

export default Update;