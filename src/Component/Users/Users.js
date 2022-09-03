import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
const Users = () => {
  const [user, setUsers] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const { id } = useParams();
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:3004/users/${id}`);
    setUsers(result.data);
  };
  return (
    <div className="container">
      <Link className="btn btn-primary mt-3" to="/">
        Back to home
      </Link>
      <h1 className="display-4 my-5">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Name: {user.name}</li>
        <li className="list-group-item">User Name: {user.username}</li>
        <li className="list-group-item">Email: {user.email}</li>
        <li className="list-group-item">Phone: {user.phone}</li>
        <li className="list-group-item">Website: {user.website}</li>
      </ul>
    </div>
  );
};

export default Users;
