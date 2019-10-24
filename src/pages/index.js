import React from "react"
import { navigate } from "gatsby"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/theme.scss"
import SEO from "../components/seo"
import { Container, Button } from "reactstrap"
import { connect } from "react-redux"
import {createSession} from '../redux/action';

const beginSession = props => {
  props.dispatch(createSession(true))
  navigate('/create-profile')
}


const IndexPage = props => {


  return (
    <React.Fragment>
      <SEO title="Home" />
      <Container className="intro">
        <h1>
          Welcome to the BD Hazardous Drug Surface Contamination Assessment
          Program
        </h1>
        <p>
          This program enables the customer to assess the potential for
          hazardous drug surface contamination in different areas of the
          healthcare facility and provides useful solutions like the BD® HD
          Check system to help implement a sustainable monitoring program.
        </p>
        <div>
          <Button className="button-orange" onClick={() => beginSession(props)}>Perform assessment</Button>
        </div>
      </Container>
      
    </React.Fragment>
  )
}
function mapStateToProps(state) {
  return {
    inSession: state.Store.inSession,
  }
}
export default connect(mapStateToProps)(IndexPage)
