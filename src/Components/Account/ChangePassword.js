import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function ChangePassword() {
  const schema = Yup.object().shape({
    oldPassword: Yup.string().required(),
    newPassword: Yup.string().required(),
    confirmPassword: Yup.string().required(),
  });

  return (
    <Container className="change-password sub-account mt-3">
      <h4 className="section-title">Change Password</h4>
      <Formik
        validationSchema={schema}
        initialValues={{
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
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

export default ChangePassword;
