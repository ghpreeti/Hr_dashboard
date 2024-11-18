import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Signup.css"; 

const Signup = () => {
  const signupSchema = Yup.object().shape({
    hrName: Yup.string().required("HR Name is required"),
    companyName: Yup.string().required("Company Name is required"),
    websiteLink: Yup.string().url("Enter a valid URL").required("Company Website is required"),
    hrIdProof: Yup.string().required("HR ID Proof is required"),
    subscriptionPlan: Yup.string().required("Subscription Plan is required"),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/signup", values);
      alert("Signup successful!");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert("Signup failed");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>
        <Formik
          initialValues={{
            hrName: "",
            companyName: "",
            websiteLink: "",
            hrIdProof: "",
            subscriptionPlan: "",
          }}
          validationSchema={signupSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="form-field">
                <Field name="hrName" placeholder="HR Name" />
                {errors.hrName && touched.hrName && (
                  <div className="error-message">{errors.hrName}</div>
                )}
              </div>

              <div className="form-field">
                <Field name="companyName" placeholder="Company Name" />
                {errors.companyName && touched.companyName && (
                  <div className="error-message">{errors.companyName}</div>
                )}
              </div>

              <div className="form-field">
                <Field name="websiteLink" placeholder="Company Website Link" />
                {errors.websiteLink && touched.websiteLink && (
                  <div className="error-message">{errors.websiteLink}</div>
                )}
              </div>

              <div className="form-field">
                <Field name="hrIdProof" placeholder="HR ID Proof" />
                {errors.hrIdProof && touched.hrIdProof && (
                  <div className="error-message">{errors.hrIdProof}</div>
                )}
              </div>

              <div className="form-field">
                <Field name="subscriptionPlan" placeholder="Subscription Plan" />
                {errors.subscriptionPlan && touched.subscriptionPlan && (
                  <div className="error-message">{errors.subscriptionPlan}</div>
                )}
              </div>

              <button type="submit" className="submit-btn">
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
