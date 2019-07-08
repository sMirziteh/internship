import React, { Component } from "react";
import { withFormik, Formik, Field, Form } from "formik";
import {
  FormGroup,
  Button,
  Label,
  Row,
  Col,
  UncontrolledTooltip,
  FormFeedback
} from "reactstrap";
import * as Yup from "yup";

const SUform = ({ values, errors, touched, isSubmitting }) => {
  return (
    <div className="container">
      <Row>
        <Col sm={{ size: 11 }} md={{ size: "3" }}>
          <header>
            <h1>Sign Up</h1>
          </header>
        </Col>
      </Row>
      <Row form>
        <Col lg={{ size: 5 }} className="formBox">
          <Form className="form-horizontal">
            <FormGroup className="form-group" row>
              <Col sm={3}>
                <Label className="control-label" for="fName">
                  First Name
                </Label>
              </Col>
              <Col sm={8}>
                <Field
                  type="text"
                  name="fName"
                  id="fName"
                  className="form-control"
                />
                {touched.fName && errors.fName && (
                  <p className="error">{errors.fName}</p>
                )}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={3}>
                <Label for="lName">Last Name</Label>
              </Col>
              <Col sm={8}>
                <Field
                  type="text"
                  name="lName"
                  id="lName"
                  className="form-control"
                />
                {touched.lName && errors.lName && (
                  <p className="error">{errors.lName}</p>
                )}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={3}>
                <Label for="email">Email</Label>
              </Col>
              <Col sm={8}>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                />
                {touched.email && errors.email && (
                  <p className="error">{errors.email}</p>
                )}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={3}>
                <Label for="password">Password</Label>
              </Col>
              <Col sm={6} xs={7}>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                />
                {touched.password && errors.password && (
                  <p className="error">{errors.password}</p>
                )}
              </Col>
              <Col sm={1} xs={1} style={{ padding: 0 }}>
                <i id="help" class="material-icons help">
                  help_outline
                </i>
              </Col>
              <UncontrolledTooltip placement="right" target="help">
                Password must be at least 6 characters but no more than 100
                characters
              </UncontrolledTooltip>
            </FormGroup>
            <FormGroup row>
              <Col sm={3}>
                <Label for="rpassword">Re-type Password</Label>
              </Col>
              <Col sm={6} xs={7}>
                <Field
                  type="password"
                  name="rpassword"
                  id="rpassword"
                  className="form-control"
                />
                {touched.rpassword && errors.rpassword && (
                  <p className="error">{errors.rpassword}</p>
                )}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={{ size: 9, offset: 3 }}>
                <FormGroup check>
                  <Label check>
                    <Field
                      type="checkbox"
                      className="checkbox"
                      id="agree"
                      name="agree"
                      checked={values.agree}
                    />{" "}
                    I agree to the{" "}
                    <span className="link">Terms and Conditions</span> and{" "}
                    <span className="link">Privacy Policy</span>
                  </Label>
                  {touched.agree && errors.agree && (
                    <p className="error">{errors.agree}</p>
                  )}
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup check row>
              <Col sm={{ size: 9, offset: 3 }}>
                <Button
                  type="submit"
                  className="btn btn-primary"
                  disabled={isSubmitting}
                  style={{ backgroundColor: "rgb(133, 196, 66)" }}
                >
                  Submit
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

const FormApp = withFormik({
  mapPropsToValues({ fName, lName, email, password, rpassword, agree }) {
    return {
      fName: fName || "",
      lName: lName || "",
      email: email || "",
      password: password || "",
      rpassword: rpassword || "",
      agree: agree || false
    };
  },
  validationSchema: Yup.object().shape({
    fName: Yup.string()
      .max(100, "Name must be less than 100 characters")
      .required("first name is required"),
    lName: Yup.string()
      .max(100, "Name must be less than 100 characters")
      .required("last name is required"),
    email: Yup.string()
      .email("Email is not valid")
      .required("email is required"),
    password: Yup.string()
      .min(6)
      .max(100)
      .required("Password is required"),
    rpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password does not match")
      .required("Password is required")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    setTimeout(() => {
      if (values.agree === false) {
        setErrors({
          agree: "must agree to terms and conditions and the privacy policy"
        });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 1000);
    console.log(values);
  }
})(SUform);

export default FormApp;
