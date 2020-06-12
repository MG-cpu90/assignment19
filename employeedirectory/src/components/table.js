import React, { Component } from "react";
import "../index.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = { data: props.employees };
    this.sortColumn = this.sortColumn.bind(this);
  }

  componentDidMount() {
    this.setState(this.props.data);
  }

  sortColumn = (event, sortKey) => {
 
    const data = this.state.data;
    data.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
    this.setState({ data });
  };

  render() {
    let newData = this.state.data;

    return (
      <div className="m-2 p-2">
        <table className="table m-2 p-2">
          <thead>
            <tr>
              <th scope="col" onClick={(e) => this.sortColumn(e, "firstName")}>
                First Name <i className="fa fa-sort" aria-hidden="true"></i>
              </th>
              <th scope="col" onClick={(e) => this.sortColumn(e, "lastName")}>
                Last Name <i className="fa fa-sort" aria-hidden="true"></i>
              </th>
              <th scope="col" onClick={(e) => this.sortColumn(e, "position")}>
                Position <i className="fa fa-sort" aria-hidden="true"></i>
              </th>
              <th scope="col" onClick={(e) => this.sortColumn(e, "salary")}>
                Salary <i className="fa fa-sort" aria-hidden="true"></i>
              </th>
              <th scope="col" onClick={(e) => this.sortColumn(e, "id")}>
                ID <i className="fa fa-sort" aria-hidden="true"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            {newData.map(function (item) {
              return (
                <tr key={item.id} data-item={item}>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.position}</td>
                  <td>{item.salary}</td>
                  <td>{item.id}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
