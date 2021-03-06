import React, { Component } from "react";
import ReactBootstrap from "react-bootstrap";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Back from "./Back";
import Radio from "./radio/Radio";
import Error from "./error/Error";
import ErrorMsg from "./error/ErrorMsg";

class FiveMos extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.handleNo = this.handleNo.bind(this);
    this.handleYes = this.handleYes.bind(this);
  }
  state = {};
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
              id1="#5mos"
              bul1="In the past year, have you lived in Ontario for at least 5 months?"
            />
          ) : (
            ""
          )}
          <div className={this.state.fail ? "error-content" : ""}>
            <Row>
              <h3 id="5mos" style={{ marginLeft: 1 + "rem" }}>
                In the past year, have you lived in Ontario for at least 5
                months?
              </h3>
            </Row>
            <Row>
              <p style={{ marginLeft: 1 + "rem" }}>
                The Ministry of Health may contact you for further verification.
              </p>
            </Row>
            {this.state.fail ? (
              <ErrorMsg
                msg="You must choose one answer on this page and click next to continue.
"
              />
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
          </div>
          {!this.state.yes && !this.state.no ? (
            <Button onClick={() => this.onSubmit()}>Next</Button>
          ) : this.state.yes ? (
            this.props.showdl ? (
              <Link to="/med-con">
                <Button>Next</Button>
              </Link>
            ) : (
              <Link to="/step2">
                <Button>Next</Button>
              </Link>
            )
          ) : (
            <Link to="/ineligible2" onClick={() => this.onSubmit()}>
              <Button>Next</Button>
            </Link>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(FiveMos);
