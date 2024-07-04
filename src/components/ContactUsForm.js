import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

export async function getServerSideProps() {
  const res = await fetch(
    "https://private-6c6b32-dalapis.apiary-mock.com/en/contact-us",
    {
      headers: {
        "Accept-Language": "en",
      },
    }
  );
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}

const contactUsForm = ({ data }) => {
  const validationSchema = Yup.object().shape({
    enquiryType: Yup.string().required(
      data?.data?.validations?.errorMessages?.typeOfEnquiry
    ),
    fullName: Yup.string().required(
      data?.data?.validations?.errorMessages?.fullName
    ),
    email: Yup.string()
      .email(data?.data?.validations?.errorMessages?.emailAddressValid)
      .required(data?.data?.validations?.errorMessages?.emailAddress),
    message: Yup.string().required(
      data?.data?.validations?.errorMessages?.yourMessage
    ),
    acceptTerms: Yup.boolean().oneOf(
      [true],
      data?.data?.validations?.errorMessages?.termsAndConditions
    ),
    acceptPolicy: Yup.boolean().oneOf(
      [true],
      data?.data?.validations?.errorMessages?.privacyPolicy
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
    <>
      <div className="signup-wrapper contact-form">
        <div className="container container-expanded">
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
                        <option value="" disabled selected>
                          Pick a type
                        </option>
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
                    <label className="label">Company Name</label>
                    <Field
                      type="text"
                      className="form-control"
                      id="Company"
                      name="Company"
                      placeholder="Type your Company"
                    />
                    <ErrorMessage
                      name="company"
                      component="div"
                      className="error-txt"
                    />
                  </div>
                  <div className="form-group">
                    <label className="label">Leave A Message</label>
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

                  <div className="form-btn">
                    <button
                      type="submit"
                      aria-label="submit"
                      className="btn btn-primary"
                      disabled={!isValid}
                    >
                      Submit
                    </button>
                    <p className="btn-text">All Fields are required</p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default contactUsForm;
