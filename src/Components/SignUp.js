import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function SignUp() {
  //   const validate = (values) => {
  //     const errors = {};
  //     if (!values.firstName) {
  //       errors.firstName = "Required";
  //     } else if (values.firstName.length > 15) {
  //       errors.firstName = "Must be 15 characters or less";
  //     }

  //     if (!values.lastName) {
  //       errors.lastName = "Required";
  //     } else if (values.lastName.length > 20) {
  //       errors.lastName = "Must be 20 characters or less";
  //     }

  //     if (!values.email) {
  //       errors.email = "Required";
  //     } else if (
  //       !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  //     ) {
  //       errors.email = "Invalid email address";
  //     }

  //     return errors;
  //   };
  //   const formik = useFormik({
  //     initialValues: {
  //       firstName: "",
  //       lastName: "",
  //       email: "",
  //     },
  //     validate,
  //     onSubmit: (values) => {
  //       alert(JSON.stringify(values, null, 2));
  //     },
  //   });
  //   const { Formik } = formik;

  const schema = Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    phone: Yup.number().required().positive(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string().required(),
    terms: Yup.bool().required().oneOf([true], "Terms must be accepted"),
  });
  return (
    <Container className="sign-up">
      <Formik
        validationSchema={schema}
        onSubmit={console.log()}
        initialValues={{
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          password: "",
          confirmPassword: "",
          terms: false,
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <div className="flex flex-row gap-4">
              <div className="basis-1/2 ">
                <Form.Group className="mb-3" controlId="firstName">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={values.firstName}
                    onChange={handleChange}
                    isValid={touched.firstName && !errors.firstName}
                    isInvalid={touched.firstName && !!errors.firstName}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </div>
              <div className="basis-1/2">
                <Form.Group className="mb-3" controlId="lastName">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    isValid={touched.lastName && !errors.lastName}
                    isInvalid={touched.lastName && !!errors.lastName}
                  />

                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </div>
            </div>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
                isInvalid={touched.email && !!errors.email}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
                isInvalid={touched.password && !!errors.password}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                required
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={values.confirmPassword}
                onChange={handleChange}
                isValid={touched.confirmPassword && !errors.confirmPassword}
                isInvalid={touched.confirmPassword && !!errors.confirmPassword}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                required
                name="terms"
                label="Agree to terms and conditions"
                onChange={handleChange}
                isInvalid={touched.terms && !!errors.terms}
                feedback={errors.terms}
                feedbackType="invalid"
                id="terms"
              />
            </Form.Group>
            <Button type="submit">Sign Up</Button>
          </Form>
        )}

        {/* <Form onSubmit={formik.handleSubmit}>
          <div className="flex flex-row gap-4">
            <div className="basis-1/2 ">
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  onBlur={formik.handleBlur}
                />
              </Form.Group>
              {formik.touched.firstName && formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
              ) : null}
            </div>
            <div className="basis-1/2">
              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
            </div>
          </div>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Enter Phone Number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="I agree to Terms and Conditions"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="">
            Sign Up
          </Button>
        </Form> */}
      </Formik>
      <div className="pt-3">
        Already have an account? <Link to="sign-in">Sign In</Link>{" "}
      </div>
    </Container>
  );
}

export default SignUp;
