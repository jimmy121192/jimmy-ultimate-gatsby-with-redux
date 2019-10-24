import React from "react"
import { Link, navigate } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/theme.scss"
import SEO from "../components/seo"
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap"
import { connect } from "react-redux"
const CreateNewCustomerProfile = props => {

  //Redirect page to homepage on browser refresh
  if (typeof window !== `undefined`) {
    if (!props.inSession) {
      navigate("/")
    }
  }
  
  return (
    <React.Fragment>
      <SEO title="Create Profile" />
      <h1>Create assessment</h1>
      <Form>
        <Container className="main-field-form">
          <Row>
            <Col lg="12">
              <h3>Create a new customer profile</h3>
              <FormGroup>
                <Label for="facility-name">Facility name</Label>
                <Input
                  type="text"
                  name="facility-name"
                  id="facility-name"
                  placeholder="Facility name"
                />
              </FormGroup>
              <FormGroup>
                <Label for="customer-tier">Customer tier</Label>
                <Input type="select" name="select" id="customer-tier">
                  <option value={80}>Tier 1</option>
                  <option value={70}>Tier 2</option>
                  <option value={60}>Tier 3</option>
                  <option value={50}>Tier 4</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <FormGroup>
                <Label for="customer-name">Customer name</Label>
                <Input
                  type="text"
                  name="customer-name"
                  id="customer-name"
                  placeholder="Customer name"
                />
              </FormGroup>
            </Col>
            <Col lg="6">
              <FormGroup>
                <Label for="customer-name">Customer title</Label>
                <Input
                  type="text"
                  name="customer-title"
                  id="customer-title"
                  placeholder="Customer title"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col lg="12">
              <FormGroup>
                <Label for="customer-email">Customer email</Label>
                <Input
                  type="email"
                  name="email"
                  id="customer-email"
                  placeholder="Customer email"
                />
              </FormGroup>
            </Col>
            <Col lg="12"></Col>
          </Row>
        </Container>
        
      </Form>
      <div className="button-container">
      <div className="link-orange">
          <Link to="/determine-frequency">Save profile and continue</Link>
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
export default connect(mapStateToProps)(CreateNewCustomerProfile)
