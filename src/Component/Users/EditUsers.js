import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
const EditUsers = () => {
  const history = useHistory();
  const { id } = useParams();
  //   alert(id);
  const [user, setUsers] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const { name, username, email, phone, website } = user;
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUsers({ ...user, [name]: value });
  };
  useEffect(() => {
    loadUsers();
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3004/users/${id}`, user);
    history.push("/");
  };

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:3004/users/${id}`);
    setUsers(result.data);
  };
  return (
    <div className="container my3">
      <h1 className="text-center">Edit Users Form</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="name"
            value={name}
            onChange={(e) => inputChangeHandler(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter Your User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="username"
            value={username}
            onChange={(e) => inputChangeHandler(e)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={(e) => inputChangeHandler(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter Your Number
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="phone"
            value={phone}
            onChange={(e) => inputChangeHandler(e)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter Your Website
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="website"
            value={website}
            onChange={(e) => inputChangeHandler(e)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Edit User
        </button>
      </form>
    </div>
  );
};

export default EditUsers;
