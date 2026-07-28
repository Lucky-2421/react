import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../services/employeeService";
import { Employee } from "../model/employee";

const AddEmployee = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(new Employee());
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!employee.name.trim() || !employee.desg.trim()) {
      setError("Please fill in both Name and Designation.");
      return;
    }

    const { name, desg } = employee;

    addEmployee({ name, desg })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setError("Something went wrong while adding the employee.");
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Add Employee</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={employee.name}
                onChange={handleChange}
                placeholder="Enter employee name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Designation</label>
              <input
                type="text"
                className="form-control"
                name="desg"
                value={employee.desg}
                onChange={handleChange}
                placeholder="Enter designation"
              />
            </div>

            <button type="submit" className="btn btn-success me-2">
              Save
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
