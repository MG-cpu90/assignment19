import React, { Component } from "react";
<<<<<<< HEAD:employeedirectory/src/pages/home.js
import Hero from "../components/hero";
import Table from "../components/table";
=======
import Hero from "../components/Hero";
import Table from "../components/Table";
import backgroundImage from './business-company-working.jpg';
>>>>>>> 6e5ba15c32fab9df90de9b40769cee3e9735240b:src/pages/home.js
import { render } from "react-dom";

class Home extends Component {
  state = {
    employees: [
      {
        lastName: "Nixon",
        firstName: "Tiger",
        name: "Tiger Nixon",
        position: "System Architect",
        salaryNumber: 320000,
        salary: "$320,000",
        id: "1",
        idNumber: 1
      },
      {
        lastName: "Khan",
        firstName: "Amit",
        name: "Amit Khan",
        position: "Accountant",
        salary: "$170,000",
        salaryNumber: 170000,
        id: "2",
        idNumber: 2
      },
      {
        lastName: "Cox",
        firstName: "Ashton",
        name: "Ashton Cox",
        position: "Junior Technical Author",
        salary: "$100,000",
        salaryNumber: 100000,
        id: "3",
        idNumber: 3
      },
      {
        lastName: "González",
        firstName: "Diego",
        name: "Diego González",
        position: "Senior Javascript Developer",
        salary: "$433,000",
        salaryNumber: 433000,
        id: "4",
        idNumber: 4
      },
      {
        lastName: "Satou",
        firstName: "Airi",
        name: "Airi Satou",
        position: "Accountant",
        salary: "$186,000",
        salaryNumber: 186000,
        id: "5",
        idNumber: 5
      },
      {
        lastName: "Williamson",
        firstName: "Brielle",
        name: "Brielle Williamson",
        position: "Integration Specialist",
        salary: "$372,000",
        salaryNumber: 372000,
        id: "6",
        idNumber: 6
      },
      {
        lastName: "Snider",
        firstName: "Donna",
        name: "Donna Snider",
        position: "Customer Support",
        salary: "$112,000",
        salaryNumber: 112000,
        id: "7",
        idNumber: 7
      },
      {
        lastName: "Kim",
        firstName: "Jennifer",
        name: "Jennifer Kim",
        position: "Marketing",
        salary: "$445,000",
        salaryNumber: 445000,
        id: "8",
        idNumber: 8
      },
      {
        lastName: "Bianchi",
        firstName: "Daniela",
        name: "Daniela Bianchi",
        position: "Human Resources",
        salary: "$233,000",
        salaryNumber: 233000,
        id: "9",
        idNumber: 9
      }
    ]
  };

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <Hero backgroundImage={"https://images.pexels.com/photos/7070/space-desk-workspace-coworking.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"}>
            <h1 className="display-4">Employee Directory</h1>
            <h2></h2>
            <p className="lead"></p>
          </Hero>
        </div>
        <Table employees={this.state.employees} />
      </div>
    );
  }
}

export default Home;
