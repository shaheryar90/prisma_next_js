import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const ContactForm = () => {
  const validationSchema = Yup.object().shape({
    enquiryType: Yup.string().required("Please select enquiry type"),
    fullName: Yup.string().required("Please enter full name"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Please enter email"),
    message: Yup.string().required("Please enter message"),
    acceptTerms: Yup.boolean().oneOf(
      [true],
      "You must accept the Terms of Use"
    ),
    acceptPolicy: Yup.boolean().oneOf(
      [true],
      "You must accept the Privacy Policy"
    ),
  });

  const initialValues = {
    enquiryType: "",
    fullName: "",
    email: "",
    message: "",
    acceptTerms: false,
    acceptPolicy: false,
  };

  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
    axios({
      method: "post",
      url: "https://virtserver.swaggerhub.com/ABDULBASIT_2/SaveObject/1.0.0/SaveUserObject",
      data: values,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        // Handle the success response here
        console.log("AJAX call successful", response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error("AJAX call error", error);
      });
  };

  return (
    <div className="form-wrapper">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => (
          <Form className="js-form-initValidation" autoComplete="off">
            <div className="form-group selectField">
              <label className="label">Type of enquiry</label>
              <div className="select2-box select2-outline">
                <Field
                  as="select"
                  className="js-select2"
                  name="enquiryType"
                  data-placeholder="Pick a type"
                  data-class="c-single"
                >
                  <option value="" />
                  <option value="select 1">Select 1</option>
                  <option value="select 2">Select 2</option>
                </Field>
              </div>
              <ErrorMessage
                name="enquiryType"
                component="div"
                className="error-txt"
              />
            </div>
            <div className="form-group">
              <label className="label">Full Name</label>
              <Field
                type="text"
                className="form-control"
                id="fname"
                name="fullName"
                placeholder="Type full name"
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="error-txt"
              />
            </div>
            <div className="form-group">
              <label className="label">Email Address</label>
              <Field
                type="text"
                className="form-control"
                id="e-mail"
                name="email"
                placeholder="Type email address"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-txt"
              />
            </div>
            <div className="form-group">
              <label className="label">Your Message</label>
              <Field
                type="text"
                className="form-control"
                id="message"
                name="message"
                placeholder="Type your message"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="error-txt"
              />
            </div>
            <div className="checkbox-group checkbox-group--contact">
              <div className="form-group checkBox-wrapper">
                <Field
                  type="checkbox"
                  className="styled-checkbox"
                  id="accept-terms"
                  name="acceptTerms"
                />
                <label htmlFor="accept-terms">I accept the Terms of use</label>
                <ErrorMessage
                  name="acceptTerms"
                  component="div"
                  className="error-txt"
                />
              </div>
              <div className="form-group checkBox-wrapper">
                <Field
                  type="checkbox"
                  className="styled-checkbox"
                  id="accept-policy"
                  name="acceptPolicy"
                />
                <label htmlFor="accept-policy">
                  I accept the Privacy Policy
                </label>
                <ErrorMessage
                  name="acceptPolicy"
                  component="div"
                  className="error-txt"
                />
              </div>
            </div>
            <div className="form-btn">
              <button
                type="submit"
                aria-label="submit"
                className="btn btn-primary"
                disabled={!isValid}
              >
                Sign Up
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
