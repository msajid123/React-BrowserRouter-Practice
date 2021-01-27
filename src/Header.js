import React from "react";
import { withRouter } from "react-router-dom";
class Header extends React.Component {
  handleClickHome = () => {
    this.props.history.push("/");
  };
  handleClickEmployeeDirectory = () => {
    this.props.history.push("/directory");
  };

  render() {
    return (
      <div>
        <h1>This is the Header</h1>
        <button onClick={this.handleClickHome}>Home Page</button>
        <button onClick={this.handleClickEmployeeDirectory}>
          Employee Directory
        </button>
      </div>
    );
  }
}

export default withRouter(Header);
