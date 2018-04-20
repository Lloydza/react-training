import React from 'react';
import { Field, reduxForm } from 'redux-form';
var validator = require("email-validator");

import styles from '../../content/styles/forms/contactForm/index.css';

const validate = (values) => {
    const errors = {};
    if (!validator.validate(values.email)) {
        errors.email = 'Please provide a valid email.';
    }
    return errors;
}

const warn = (values) => {
    const warnings = {}
    if (values.firstName && values.firstName.length < 3) {
        warnings.firstName = 'Thats a short first name...';
    }
    if (values.lastName && values.lastName.length < 3) {
        warnings.lastName = 'Thats a short last name...';
    }
    return warnings;
}

const renderInputField = ({
    name,
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div className="input">
        <label htmlFor={name}>{label}</label>
        <input {...input} placeholder={label} type={type} />
        {touched &&
            ((error && <span className="error">{error}</span>) ||
            (warning && <span className="warning">{warning}</span>))}
    </div>
  )

let ContactForm = props => {
  return <form onSubmit={props.handleSubmit} className="contact-form" >
            <div className="input-container" >
                <Field name="firstName" label="First Name" component={renderInputField} type="text" />
            </div>
            <div className="input-container" >
                <Field name="lastName" label="Last Name" component={renderInputField} type="text" />
            </div>
            <div className="input-container" >
                <Field name="email" label="Email" component={renderInputField} type="email" />
            </div>
            <div className="button-container">
                <button type="submit">Submit</button>
            </div>
         </form>;
}

export default reduxForm({ form: 'contact', validate, warn })(ContactForm);