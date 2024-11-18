import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./LoginPage.css";

const LoginPage = () => {
  const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", values);
      alert("Login successful!");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  return (
    <div className="login-page">
      <div className="card">
        <h2 className="card-title">Login to SInterview.ai</h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="input-group">
                <Field name="email" type="email" placeholder="Email" className="input-field" />
                {errors.email && touched.email && (
                  <div className="error">{errors.email}</div>
                )}
              </div>
              <div className="input-group">
                <Field name="password" type="password" placeholder="Password" className="input-field" />
                {errors.password && touched.password && (
                  <div className="error">{errors.password}</div>
                )}
              </div>

              <button type="submit" className="button login-btn">
                Login
              </button>
            </Form>
          )}
        </Formik>

        <div className="redirect-link">
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
