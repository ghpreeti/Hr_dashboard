import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import "./HrDashboard.css";

const HrDashboard = () => {
  const [resumes, setResumes] = useState([]);
  const [resumeFiles, setResumeFiles] = useState([]);

  const handleFileChange = (event) => {
    setResumeFiles(event.target.files);
  };

  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("numberOfCandidates", values.numberOfCandidates);
    formData.append("jobRole", values.jobRole);
    for (let i = 0; i < resumeFiles.length; i++) {
      formData.append("resumes", resumeFiles[i]);
    }

    try {
      const response = await axios.post("http://localhost:5000/api/hr/dashboard", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Data saved successfully!");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert("Submission failed");
    }
  };

  return (
    <div className="hr-dashboard">
      <h2>HR Dashboard</h2>
      <Formik
        initialValues={{
          numberOfCandidates: "",
          jobRole: "",
        }}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className="input-group">
              <Field name="numberOfCandidates" placeholder="Number of Candidates" className="input-field" />
            </div>
            <div className="input-group">
              <Field name="jobRole" placeholder="Job Role" className="input-field" />
            </div>
            <div className="input-group">
              <input
                type="file"
                name="resumes"
                accept=".pdf, .docx, .doc"
                multiple
                onChange={handleFileChange}
                className="file-input"
              />
            </div>

            <button type="submit" className="button">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default HrDashboard;
