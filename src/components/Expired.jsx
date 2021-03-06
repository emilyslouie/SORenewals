import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";

class Expired extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <div class="landing-body">
          <Back onClick={this.goBack} />
          <Row>
            <h2 class="ineligible-text" style={{ marginLeft: 1 + "rem" }}>
              You are <strong>not </strong>eligible to renew online at this
              time.
            </h2>
            <p style={{ marginLeft: 1 + "rem" }}>
              Please visit a ServiceOntario centre to renew in-person or for
              further assistance in renewing your:
            </p>
          </Row>
          <Row>
            <ul>
              <li>
                <strong>driver's licence</strong>
              </li>
            </ul>
          </Row>
          <Button
            href="https://www.ontario.ca/page/serviceontario-locations-hours-and-contact"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            Find your nearest ServiceOntario
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Expired);
