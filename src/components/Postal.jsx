import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import Checkbox from "rc-checkbox";
import "rc-checkbox/assets/index.css";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import { Input } from "reactstrap";
import Error from "./error/Error";
import ErrorMsg from "./error/ErrorMsg";

class Postal extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.checkpostal = this.checkpostal.bind(this);
  }
  state = {
    postal: ""
  };
  goBack() {
    this.props.history.goBack();
  }

  checkpostal() {
    var regex = /^[A-Za-z][ -]?\d[ -]?[A-Za-z][ -]?\d[ -]?[A-Za-z][ -]?\d$/;

    var match = regex.exec(this.state.postal);
    if (match) {
      this.setState({ postaldisabled: false, fail: false });
    } else {
      this.setState({ postaldisabled: true });
    }
  }

  componentDidMount() {
    this.checkpostal();
    window.scrollTo(0, 0);
  }

  onSubmit() {
    if (this.state.postaldisabled) {
      this.setState({ fail: true });
    } else {
      this.setState({ fail: false });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div class="landing-body">
          <Back onClick={this.goBack} />
          {this.state.fail ? <Error id1="#postal" bul1="Postal code" /> : ""}
          <div className={this.state.fail ? "error-content" : ""}>
            <Row>
              <Col>
                <h3 id="postal">Postal code</h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Enter your postal code</p>
              </Col>
            </Row>
            {this.state.fail ? (
              <ErrorMsg msg="Enter your postal code on this page and click next to continue." />
            ) : (
              ""
            )}
            <p>For example N3T 2L7</p>
            <input
              id="postal"
              ref={input => (this.postal = input)}
              onChange={() => {
                let temp = this.postal.value;
                this.setState({ postal: temp });
              }}
              onBlur={() => this.checkpostal()}
            />
            {this.state.postaldisabled ? (
              <Button onClick={() => this.onSubmit()}>Next</Button>
            ) : (
              <Link to="/contact">
                <Button>Next</Button>
              </Link>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Postal);
