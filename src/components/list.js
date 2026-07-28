import React, { useEffect, useState } from "react";
import { getAllEmployees } from "../services/employeeService";

const List = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = () => {
    getAllEmployees()
      .then((response) => { 
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Employee List</h2>

      <table className="table table-bordered table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.desg}</td>
              <td>
                <button className="btn btn-primary btn-sm me-2">
                  Update
                </button>

                <button className="btn btn-info btn-sm me-2">
                  Info
                </button>

                <button className="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;