import axios from "axios";

const BASE_URL = "http://localhost:4000/employees";

// Get all employees
export const getAllEmployees = () => {
  return axios.get(BASE_URL);
};

// Get employee by ID
export const getEmployeeById = (id) => {
  return axios.get(`${BASE_URL}/${id}`);
};

// Add employee
export const addEmployee = (employee) => {
  return axios.post(BASE_URL, employee);
};

// Update employee
export const updateEmployee = (id, employee) => {
  return axios.put(`${BASE_URL}/${id}`, employee);
};

// Delete employee
export const deleteEmployee = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};