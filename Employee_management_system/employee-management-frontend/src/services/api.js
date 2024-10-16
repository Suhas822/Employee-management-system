import axios from 'axios';

// Base URL for the backend API (adjust as necessary)
const API_URL = 'http://127.0.0.1:8000/';

// Fetch all employees
export const getEmployees = () => {
  return axios.get(`${API_URL}/employees/`);
};

// Fetch all departments
export const getDepartments = () => {
  return axios.get(`${API_URL}/departments/`);
};

// Create a new employee
export const createEmployee = (employee) => {
  return axios.post(`${API_URL}/employees/`, employee);
};

// Create a new department
export const createDepartment = (department) => {
  return axios.post(`${API_URL}/departments/`, department);
};
