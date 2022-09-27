import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function AddAddress() {
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
    <Container className="change-password">
      <Formik
        validationSchema={schema}
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
            <div className="flex flex-row">
              <div className="basis-1/2">
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
            <Form.Group className="mb-3" controlId="oldPassword">
              <Form.Label>Enter Old Password</Form.Label>
              <Form.Control
                required
                type="password"
                name="oldPassword"
                placeholder="Enter Old Password"
                value={values.oldPassword}
                onChange={handleChange}
                isValid={touched.oldPassword && !errors.oldPassword}
                isInvalid={touched.oldPassword && !!errors.oldPassword}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="newPassword">
              <Form.Label>Enter New Password</Form.Label>
              <Form.Control
                required
                type="password"
                name="newPassword"
                placeholder="Enter New Password"
                value={values.newPassword}
                onChange={handleChange}
                isValid={touched.newPassword && !errors.newPassword}
                isInvalid={touched.newPassword && !!errors.newPassword}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                required
                type="password"
                name="confirmPassword"
                placeholder="Confirm New Password"
                value={values.confirmPassword}
                onChange={handleChange}
                isValid={touched.confirmPassword && !errors.confirmPassword}
                isInvalid={touched.confirmPassword && !!errors.confirmPassword}
              />
            </Form.Group>
            <Button type="submit">Save</Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default AddAddress;
