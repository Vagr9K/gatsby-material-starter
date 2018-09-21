import React, { Component } from "react";
import UserLinks from "../UserLinks";
import "./ToolbarActions.scss";

class Toolbar extends Component {
  render() {
    const { userLinks } = this.props;
    return (
      <div className="toolbar-actions">
        <div className="userlinks-container">
          <UserLinks userLinks={userLinks} />
        </div>
      </div>
    );
  }
}

export default Toolbar;
