import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Table from './components/table'
import home from './pages/home'

const employees = [
{
  lastName: 'Nixon',
  firstName: 'Tiger',
  name: 'Tiger Nixon',
  position: 'System Architect',
  salaryNumber: 320000,
  salary: '$320,000',
  id: 1
},
{
  lastName: 'Winters',
  firstName: 'Garrett',
  name: 'Garrett Winters',
  position: 'Accountant',
  salary: '$170,000',
  salaryNumber: 170000,
  id: 2
},
{
  lastName: 'Cox',
  firstName: 'Ashton',
  name: 'Ashton Cox',
  position: 'Junior Technical Author',
  salary: '$86,000',
  salaryNumber: 86000,
  id: 3
},
{
  lastName: 'Kelly',
  firstName: 'Cedric',
  name: 'Cedric Kelly',
  position: 'Senior Javascript Developer',
  salary: '$433,000',
  salaryNumber: 433000,
  id: 4
},
{
  lastName: 'Satou',
  firstName: 'Airi',
  name: 'Airi Satou',
  position: 'Accountant',
  salary: '$162,000',
  salaryNumber: 162000,
  id: 5
},
{
  lastName: 'Williamson',
  firstName: 'Brielle',
  name: 'Brielle Williamson',
  position: 'Integration Specialist',
  salaryNumber: 372000,
  id: 6
},
{
  lastName: 'Snider',
  firstName: 'Donna',
  name: 'Donna Snider',
  position: 'Customer Support',
  salary: '$112,000',
  salaryNumber: 112000,
  id: 7
}
]

function App() {
  return <Table employees={employees}/>;
}

export default App;
