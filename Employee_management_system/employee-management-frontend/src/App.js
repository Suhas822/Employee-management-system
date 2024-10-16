import React from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import DepartmentForm from './components/DepartmentForm';

function App() {
  return (
    <div className="App">
      <h1>Employee Management System</h1>
      <div className="flex-view" style={{display: "flex"}}>
        <div className='half-view' style={{width: "50%"}}> 
          <DepartmentForm />
        </div>
        <div className='half-view' style={{width: "50%"}}>
          <EmployeeForm />
        </div>
      </div>
      <div className="flex-view" style={{display: "flex",justifyContent: 'center'}}>
        <div style={{width: "80%"}}>
        <EmployeeList />
        </div>
      </div>
    </div>
  );
}

export default App;
