import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formValues } from 'redux-form';

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
    // console.log(values);

    let x = {};
    const ItemList = formValues('contactForm')(x);
    console.log(ItemList);
    console.log(x);
  }

  render() {
    return (
      <div className="other">
        <div>
          <h1>This is the Other Page.</h1>
        </div>
        <div>
          <ContactForm onSubmit={this.submitContactForm} />
        </div>
        <div className="button" onClick={this.handleChangeRoute}>Go to the home page.</div>
      </div>
    );
  }
};

var mapStateToProps = function(state) {
  return {
  }
};

var mapDispatchToProps = (dispatch) => {
  return {
    onchangeRoute: (route) => {
      dispatch(changeRoute(route));
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Other);