import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [user, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3004/users");
    setUsers(result.data.reverse());
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3004/users/${id}`);
    loadUsers();
  };
  return (
    <div className="container my-3">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Serial</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((user, index) => {
            return (
              <>
                <tr>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link
                      className="btn btn-primary me-2"
                      to={`/user/${user.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-primary me-2"
                      to={`/edit/user/${user.id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      className="btn btn-danger me-2"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delet
                    </Link>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
