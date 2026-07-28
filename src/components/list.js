import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllEmployees, deleteEmployee } from "../services/employeeService";

const List = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = () => {
    getAllEmployees()
      .then((response) => {
        setEmployees(response.data);
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(
          "Could not load employees. Make sure the API server is running (npm run server)."
        );
      });
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?")) {
      return;
    }

    deleteEmployee(id)
      .then(() => {
        loadEmployees();
      })
      .catch((error) => {
        console.log(error);
        setError("Something went wrong while deleting the employee.");
      });
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Employee List</h2>
        <button
          className="btn btn-success"
          onClick={() => navigate("/add")}
        >
          + Add Employee
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

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
          {employees.length === 0 && !error && (
            <tr>
              <td colSpan="4" className="text-center">
                No employees found.
              </td>
            </tr>
          )}

          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.desg}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => navigate(`/update/${emp.id}`)}
                >
                  Update
                </button>

                <button
                  className="btn btn-info btn-sm me-2"
                  onClick={() => navigate(`/view/${emp.id}`)}
                >
                  Info
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(emp.id)}
                >
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
