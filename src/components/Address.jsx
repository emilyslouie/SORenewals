import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import Radio from "./radio/Radio";
import Error from "./error/Error";
import ErrorMsg from "./error/ErrorMsg";
import "../App.css";

class Address extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.handleNo = this.handleNo.bind(this);
    this.handleYes = this.handleYes.bind(this);
  }
  state = {
    // no: false,
    // fail: false,
    // yes: false
  };
  goBack() {
    this.props.history.goBack();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onSubmit() {
    if (!this.state.yes && !this.state.no) {
      this.setState({ fail: true });
    } else {
      this.setState({ fail: false });
    }
  }

  handleNo = () => {
    this.setState({ no: true, yes: false, fail: false });
  };

  handleYes = () => {
    this.setState({ yes: true, no: false, fail: false });
  };

  render() {
    return (
      <React.Fragment>
        <div class="landing-body">
          <Back onClick={this.goBack} />
          {this.state.fail ? (
            <Error
              id1="#address"
              bul1="Has your address changed in the last 90 days?"
            />
          ) : (
            ""
          )}
          <div className={this.state.fail ? "error-content" : ""}>
            <Row>
              {this.props.showdl ? (
                <h3 id="address" style={{ marginLeft: 1 + "rem" }}>
                  Do you currently live at the address on your driver's license?
                </h3>
              ) : this.props.showopc ? (
                <h3 id="address" style={{ marginLeft: 1 + "rem" }}>
                  Do you currently live at the address on your Ontario photo
                  card?
                </h3>
              ) : (
                <h3 id="address" style={{ marginLeft: 1 + "rem" }}>
                  Do you currently live at the address on your driver's license
                  or Ontario photo card?
                </h3>
              )}

              <br />
            </Row>
            {this.state.fail ? (
              <ErrorMsg msg="You must choose one answer on this page and click next to continue." />
            ) : (
              ""
            )}
            <div class="radio-margins">
              <Row>
                <Col>
                  <Radio value="Yes" onClick={() => this.handleYes()} />
                  <Radio value="No" onClick={() => this.handleNo()} />
                </Col>
              </Row>
            </div>
            {!this.state.no && !this.state.yes ? (
              <Button onClick={() => this.onSubmit()}>Next</Button>
            ) : this.state.yes ? (
              this.props.showhc ? (
                <Link to="/five-mos" onClick={() => this.onSubmit()}>
                  <Button>Next</Button>
                </Link>
              ) : this.props.showdl ? (
                <Link to="/med-con" onClick={() => this.onSubmit()}>
                  <Button>Next</Button>
                </Link>
              ) : (
                <Link to="/pc-input" onClick={() => this.onSubmit()}>
                  <Button>Next</Button>
                </Link>
              )
            ) : (
              <Link to="/ineligible" onClick={() => this.onSubmit()}>
                <Button>Next</Button>
              </Link>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(Address);
