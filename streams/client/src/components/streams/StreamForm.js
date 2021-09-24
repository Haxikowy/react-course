import '../scss/StreamForm.scss';
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return <div className="error--text">{error}</div>;
    }
  };

  renderInput = ({ input, label, meta }) => {
    const className = `field__input ${
      meta.error && meta.touched ? `error--input` : ''
    }`;

    return (
      <div className="field">
        <label className="field__label">{label}</label>
        <input className={className} {...input} autoComplete="off" />
        <span className="input__style"></span>
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="stream-form__form">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="field__button">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

export default reduxForm({ form: 'streamForm', validate })(StreamForm);
