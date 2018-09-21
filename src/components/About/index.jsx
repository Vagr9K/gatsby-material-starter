import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import UserLinks from "../UserLinks";
import "./About.scss";

class About extends Component {
  render() {
    const { userLinks, userAvatar, userName, userDescription } = this.props;
    return (
      <div className="about-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="about-wrapper">
            <img
              src={userAvatar}
              className="about-img"
              alt={userName}
            />
            <CardText>
              <p className="about-text md-body-1">{userDescription}</p>
            </CardText>
            <UserLinks labeled userLinks={userLinks} />
          </div>
        </Card>
      </div>
    );
  }
}

export default About;
