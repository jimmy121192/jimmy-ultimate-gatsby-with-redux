import React, { useState } from "react"
import { Link, navigate } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/theme.scss"
import SEO from "../components/seo"
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, CustomInput } from "reactstrap"
import { connect } from "react-redux"



const CreateAssessment = props => {

  //CALL FOR HOOKS
  //Note: To use React Hooks properly, always remember to write your component name with a capital first letter for it to be seen as a Component.
  const [pathWayData, setPathwayData] = useState([])
  const handlePathwayName = event => {
    setPathwayData(event.target.value)
    // console.log(pathWayData)
  }


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
          <Row>
            <Col lg="6" xs="12">
              <FormGroup>
                <Input
                  type="text"
                  name="pathway-name"
                  id="pathway-name"
                  placeholder="Please enter pathway name"
                  onChange={val => handlePathwayName(val)}
                />
              </FormGroup>
            </Col>
            <Col lg="6" xs="12">
              <FormGroup className="control">
                <p>Include pathway in assessment:</p> <Input type="checkbox" />
                
              </FormGroup>
             
            </Col>
          </Row>
        </Container>
      </Form>
      <div className="button-container">
      <Button className="button-grey">+ Add a pathway</Button>
      <Button className="button-orange">Run assessment</Button>
        </div>
    </React.Fragment>
  )
}
function mapStateToProps(state) {
  return {
    inSession: state.Store.inSession,
  }
}
export default connect(mapStateToProps)(CreateAssessment)
