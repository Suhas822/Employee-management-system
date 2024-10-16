import React, { useState, useEffect } from 'react';
import { getEmployees, getDepartments } from '../services/api';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchName, setSearchName] = useState('');  // State for filtering by name
  const [searchDepartment, setSearchDepartment] = useState('');  // State for filtering by department
  const [departments, setDepartments] = useState([]);

  // Fetch employees and departments when the component mounts
  useEffect(() => {
    getEmployees().then((response) => setEmployees(response.data));
    getDepartments().then((response) => setDepartments(response.data));
  }, []);

  // Filter employees based on search criteria
  const filteredEmployees = employees.filter((employee) => {
    const matchesName = employee.name.toLowerCase().includes(searchName.toLowerCase());
    const matchesDepartment = employee.department.name.toLowerCase().includes(searchDepartment.toLowerCase());
    return matchesName && matchesDepartment;
  });

  return (
    <div>
      <h2>Employee List</h2>

      {/* Search by Name */}
      <input
        type="text"
        placeholder="Search by Name"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />

      {/* Search by Department */}
      <select
        value={searchDepartment}
        onChange={(e) => setSearchDepartment(e.target.value)}
      >
        <option value="">All Departments</option>
        {departments.map((dept) => (
          <option key={dept.id} value={dept.name}>
            {dept.name}
          </option>
        ))}
      </select>

      {/* Display the filtered list of employees */}
      <ul>
        {filteredEmployees.map((employee) => (
          <li key={employee.id}>
            {employee.name} - {employee.department.name} - {employee.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
