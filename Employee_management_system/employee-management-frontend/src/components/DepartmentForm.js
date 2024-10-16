import React, { useState } from 'react';
import { createDepartment } from '../services/api';

const DepartmentForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createDepartment({ name, description }).then(() => {
      setName('');
      setDescription('');
      alert('Department added successfully');
      window.location.reload();
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Department</h2>
      <input
        type="text"
        placeholder="Department Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Department</button>
    </form>
  );
};

export default DepartmentForm;
