import React from "react";
import { getAllEmployees } from "./EmployeeAPI";

class Directory extends React.Component {
  handleClickEmployee = (id) => {
    console.log(id);
  };
  render() {
    const employeeList = getAllEmployees();
    return (
      <div>
        <h1>This is my Directory</h1>
        <div>
          {employeeList.map((employee) => {
            return (
              <div onClick={this.handleClickEmployee.bind(this, employee.id)}>
                {employee.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Directory;
