import React from "react"
import { Link, navigate } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/theme.scss"
import SEO from "../components/seo"
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap"
import { connect } from "react-redux"



const DetermineFrequency = props => {

  if (typeof window !== `undefined`) {
    if (!props.inSession) {
      navigate("/")
    }
  }

  return (
    <React.Fragment>
      <SEO title="Create Assessment" />
      <h1>Create assessment</h1>
      <Form>
        <Container className="main-field-form">
          <h3>Determine testing frequency</h3>
          <Row>
            <Col lg="4" xs="12">
              <FormGroup>
                <Label for="high-risk">High risk</Label>
                <Input type="select" name="high-risk-select" id="high-risk">
                  <option value={365}>Daily</option>
                  <option value={52}>Weekly</option>
                  <option value={12}>Monthly</option>
                  <option value={4}>Quarterly</option>
                </Input>
              </FormGroup>
            </Col>
            <Col lg="4" xs="12">
              <FormGroup>
                <Label for="medium-risk">Medium risk</Label>
                <Input type="select" name="medium-risk-select" id="medium-risk">
                  <option value={365}>Daily</option>
                  <option value={52}>Weekly</option>
                  <option value={12}>Monthly</option>
                  <option value={4}>Quarterly</option>
                </Input>
              </FormGroup>
            </Col>
            <Col lg="4" xs="12">
              <FormGroup>
                <Label for="low-risk">Customer tier</Label>
                <Input type="select" name="low-risk-select" id="low-risk">
                  <option value={365}>Daily</option>
                  <option value={52}>Weekly</option>
                  <option value={12}>Monthly</option>
                  <option value={4}>Quarterly</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </Container>
       
      </Form>
      <div className="button-container">
      <div className="link-orange">
          <Link to="/create-assessment">Save profile and continue</Link>
        </div>
        </div>
    </React.Fragment>
  )
}
function mapStateToProps(state) {
  return {
    inSession: state.Store.inSession,
  }
}
export default connect(mapStateToProps)(DetermineFrequency)
