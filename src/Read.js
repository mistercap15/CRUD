import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  

  function getData() {
    axios
      .get("https://641d79ca1a68dc9e461fda31.mockapi.io/users")
      .then((res) => {
        setData(res.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://641d79ca1a68dc9e461fda31.mockapi.io/users/${id}`)
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage = (id, task, remark) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", task);
    localStorage.setItem("email", remark);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      
      <div className="d-flex justify-content-between m-2">
        <h2>ToDO's List</h2>
        <Link to="/">
          <button className="btn btn-secondary">Create</button>
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Task</th>
            <th scope="col">Remark</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.task}</td>
                  <td>{eachData.remark}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.task,
                            eachData.remark
                          )
                        }
                      >
                        Edit{" "}
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;