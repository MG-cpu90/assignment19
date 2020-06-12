import React, { Component } from "react";
import Hero from "../components/Hero";
import Table from "../components/Table";
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
        lastName: "Winters",
        firstName: "Garrett",
        name: "Garrett Winters",
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
        salary: "$86,000",
        salaryNumber: 86000,
        id: "3",
        idNumber: 3
      },
      {
        lastName: "Kelly",
        firstName: "Cedric",
        name: "Cedric Kelly",
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
        salary: "$162,000",
        salaryNumber: 162000,
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
        idNumber: 1
      }
    ]
  };

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <Hero backgroundImage="../business-company-working.jpg">
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
