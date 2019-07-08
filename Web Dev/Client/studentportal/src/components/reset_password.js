import React from "react";
import { Formik, Form as Form1 } from "formik";
import * as Yup from "yup";
import { OverlayTrigger, Tooltip, Row, Col, Button, Form as Form2, Container} from 'react-bootstrap'

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email with [name]@[domain].[com/org/net/etc]")
    .required("Required"),
  password: Yup.string()
    .min(6, "Password must be longer than 6 characters")
    .max(100, "Password must be less than 100 characters")
    .required("Required"),
  reenter: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

function SignUp() {
  return (
    <Formik
      validationSchema={ schema }
      onSubmit={
        values => {
          // same shape as initial values
          console.log(values);
        }
      }
      initialValues={{
        email: 'given email',
        password: '',
        reenter: '',
        agree: ''
      }}
    >
      
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
      }) => (
        <Container>
          <Row className="justify-content-md-center">
            <Col md="6">
            <h1>Reset Password</h1>
            <Form2 noValidate onSubmit={handleSubmit} style={{backgroundColor: 'lightgray', padding: '20px', 'borderRadius': '5px'}}>               
              <Form2.Group>
                <Form2.Label>Email</Form2.Label>
                <Form2.Control 
                  type="text" 
                  name="email"
                  value={values.email}
                />
              </Form2.Group>

                <Form2.Group>
                  <Form2.Label style={{display:'flex'}}>
                    Password
                    <OverlayTrigger
                      key="tooltip"
                      placement="right"
                      overlay={
                        <Tooltip id={`tooltip-right`}>
                          Password must be at least 6 characters but no more than 100 characters.
                        </Tooltip>
                      }
                    >

                    <i class="material-icons">
                    help_outline
                    </i>
                    {/* <p style={{ 
                    width: '25px',
                    height: '25px', 
                    'marginBottom': '0px',
                    'marginLeft': '5px',
                    //'float': 'left',
                    'borderStyle': 'solid', 
                    'borderColor': 'black', 
                    'borderRadius': '50%',
                    'borderWidth': '1px',
                    'textAlign': 'center',
                    }}>?</p> */}
                    </OverlayTrigger>
                  </Form2.Label>
                    
                  
                  <Form2.Control
                    maxLength='100'
                    type="password" 
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur} 
                    isValid={touched.password && !errors.password}
                    isInvalid={touched.password && errors.password}
                    placeholder="Password"
                  />
                  <Form2.Control.Feedback type="invalid">
                    {errors.password}
                  </Form2.Control.Feedback>
                </Form2.Group>

              <Form2.Group>
                <Form2.Label>Re-Type Password</Form2.Label>
                <Form2.Control 
                  type="password" 
                  name="reenter"
                  value={values.reenter}
                  onChange={handleChange}
                  onBlur={handleBlur} 
                  isValid={touched.reenter && !errors.reenter}
                  isInvalid={touched.reenter && errors.reenter}
                />
                <Form2.Control.Feedback type="invalid">
                  {errors.reenter}
                </Form2.Control.Feedback>
              </Form2.Group>

              <Form2.Group>
                <Form2.Check
                  type="checkbox"
                  onChange={handleChange}
                  isInvalid={touched.agree && errors.agree}
                  onBlur={handleBlur} 
                  feedback={errors.agree}
                  label= {["I agree to the ", <a href="">Terms of Use</a>,  " and ", <a href="">Privacy Policy</a>]}
                  id="agree"
                />
                <Form2.Control.Feedback type="invalid">
                  {errors.agree}
                </Form2.Control.Feedback>
              </Form2.Group>
              
              <Button 
                type="submit"
                disabled={
                  !touched.password || errors.password ||
                  !touched.reenter || errors.reenter 
                  }>Reset Password
              </Button>
            </Form2>
            </Col>
          </Row>
        </Container>
      )}
    </Formik>
  );
}

export default SignUp;