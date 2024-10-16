import React, { useState, useEffect } from 'react';
import { getDepartments, createEmployee } from '../services/api';

const EmployeeForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [department, setDepartment] = useState('');
  const [departments, setDepartments] = useState([]);

  // Fetch departments when the component mounts
  useEffect(() => {
    getDepartments().then((response) => setDepartments(response.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    createEmployee({ name, address, department }).then(() => {
      setName('');
      setAddress('');
      setDepartment('');
      alert('Employee added successfully');
      window.location.reload();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Employee</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        required
      >
        <option value="">Select Department</option>
        {departments.map((dept) => (
          <option key={dept.id} value={dept.id}>
            {dept.name}
          </option>
        ))}
      </select>
      <button type="submit">Add Employee</button>
    </form>
  );
};

export default EmployeeForm;
