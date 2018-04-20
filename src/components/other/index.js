import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFormValues, change  } from 'redux-form';

import ContactForm from '../../forms/contactForm/index'

import styles from '../../content/styles/components/other/index.css';

import { 
  changeRoute
} from '../../store/actions';

class Other extends Component {
  handleChangeRoute = (e) => {
    e.preventDefault();
    this.props.onchangeRoute("/");
  }

  submitContactForm = (values) => {
    console.log(values);
  }

  viewContactFormValuesOutsideTheForm = () => {
    console.log(this.props.contactForm);
  }

  updateContactFormFirstNameOutsideTheForm = () => {
    this.props.updateContactFormField('firstName', 'blah blah blah');
  }

  render() {
    return (
      <div className="other">
        <div>
          <h1>This is the Other Page.</h1>
        </div>
        <div>
          <ContactForm onSubmit={this.submitContactForm} />
          <div>
          <div className="button" onClick={this.viewContactFormValuesOutsideTheForm}>Get Form Values</div>
          <div className="button" onClick={this.updateContactFormFirstNameOutsideTheForm}>Update First Name</div>
          </div>
        </div>
        <div className="button" onClick={this.handleChangeRoute}>Go to the home page</div>
      </div>
    );
  }
};

var mapStateToProps = function(state) {
  return {
    contactForm: getFormValues('contact')(state)
  }
};

var mapDispatchToProps = (dispatch) => {
  return {
    updateContactFormField: (field, value) => {
      dispatch(change('contact', field, value));
    },
    onchangeRoute: (route) => {
      dispatch(changeRoute(route));
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Other);