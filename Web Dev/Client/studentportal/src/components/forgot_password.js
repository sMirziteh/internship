import React from "react";
import { Formik, Form as Form1 } from "formik";
import * as Yup from "yup";
import { OverlayTrigger, Tooltip, Row, Col, Button, Form as Form2, Container} from 'react-bootstrap'

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Must be a valid email with [name]@[domain].[com/org/net/etc]")
    .required("Required"),
});

function ForgotPassword() {
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
        email: '',
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
            <h1>Forgot Password</h1>
            <Form2 noValidate onSubmit={handleSubmit} style={{backgroundColor: 'lightgray', padding: '20px', 'borderRadius': '5px'}}>
  
              <Form2.Group>
                <Form2.Label>Email:</Form2.Label>
                <Form2.Control 
                  type="text" 
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur} 
                  isValid={touched.email && !errors.email}
                  isInvalid={touched.email && errors.email}
                  placeholder="example@example.com" 
                />
                <Form2.Control.Feedback type="invalid">
                  {errors.email}
                </Form2.Control.Feedback> 
              </Form2.Group>

              <Button 
                type="submit"
                disabled={ !touched.email || errors.email }>Get New Password
              </Button>
            </Form2>
            </Col>
          </Row>
        </Container>
      )}
    </Formik>
  );
}

export default ForgotPassword;