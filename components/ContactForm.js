import React, {useEffect, useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup"
// import * as axios from 'axios'


const FormValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required('This field is required'),
    name: Yup.string()
      .required('This field is required'),
    phone: Yup.string()
      .matches(new RegExp(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\.\/0-9]*$/, 'i'), 'Invalid phone number').required('This field is required'),
    message: Yup.string(),

});


const ContactForm = () => {

  const [result, setResult] = useState("");

  const handleSubmit = () => {

  }

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
  }

  return(
      <div>
        <h1>Send me a message!</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={FormValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="name" placeholder="Name"/>
              <ErrorMessage name="name" component="div" />
              <Field type="email" name="email" placeholder="Email"/>
              <ErrorMessage name="email" component="div" />
              <Field type="text" name="phone" placeholder="Phone"/>
              <ErrorMessage name="phone" component="div" />
              <Field type="text" name="message" id="message" placeholder="Message..."/>
                <ErrorMessage name="message" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
  )
}

export default ContactForm;
