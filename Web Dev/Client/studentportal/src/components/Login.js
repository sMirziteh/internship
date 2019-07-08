import React, { Component } from "react";
import ReactSignupLoginComponent from 'react-signup-login-component'; // Must install this package
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container, Alert} from 'reactstrap'

// Passing the class back as a function
//class Login extends Component {
//
//}
class Login extends React.Component {
  render() {
    return (
      <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
        .email('Email is invalid')
        .required('Email is required'),
        password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      })}
      onSubmit={fields => {
        alert('succesfully submitted)\n\n' + JSON.stringify(fields, null, 4))
      }}
      render={({ errors, status, touched, values }) => (
              <Container>
              <h2> Login </h2>
                 <Form className="form-horizontal">
                    <div className="form-group">
                       <label className="control-label col-sm-3" htmlFor="email">* Email:</label>
                       <div className="col-sm-6">
                       <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                       <ErrorMessage name="email" component="div" className="alert alert-danger" />
                       </div>
                    </div>
                    <div className="form-group">
                       <label className="control-label col-sm-3" htmlFor="password">* Password:</label>
                       <div className="col-sm-4">
                       <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                       <ErrorMessage name="password" component="div" className="alert alert-danger" />
                       </div>
                    </div>
                    <div className="form-group">
                      <div className="control-label col-sm-3">
                      </div>
                       <div className="col-sm-6">
                       <button type="submit" className="btn btn-primary mr-2">Sign up</button>
                       </div>
                    </div>
                 </Form>
              </Container>
      )}
      />
    )
  }
}
export default Login;
