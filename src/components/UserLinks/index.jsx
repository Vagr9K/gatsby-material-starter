import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import "./UserLinks.scss";

class UserLinks extends Component {
  getLinkElements() {
    const { userLinks, labeled } = this.props;
    if (!userLinks) {
      return null;
    }
    return userLinks.map(link => (
      <Button
        icon={!labeled}
        flat={labeled}
        secondary
        key={link.label}
        iconClassName={link.iconClassName}
        href={link.url}
      >
        {labeled ? link.label : ""}
      </Button>
    ));
  }
  render() {
    return <div className="user-links">{this.getLinkElements()}</div>;
  }
}

export default UserLinks;
