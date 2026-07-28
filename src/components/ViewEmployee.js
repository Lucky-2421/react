import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getEmployeeById } from "../services/employeeService";

const ViewEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getEmployeeById(id)
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((err) => {
        console.log(err);
        setError("Could not load employee details.");
      });
  }, [id]);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Employee Info</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          {error && <div className="alert alert-danger">{error}</div>}

          {employee && (
            <ul className="list-group mb-3">
              <li className="list-group-item">
                <strong>ID:</strong> {employee.id}
              </li>
              <li className="list-group-item">
                <strong>Name:</strong> {employee.name}
              </li>
              <li className="list-group-item">
                <strong>Designation:</strong> {employee.desg}
              </li>
            </ul>
          )}

          <button className="btn btn-secondary" onClick={() => navigate("/")}>
            Back to List
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewEmployee;
