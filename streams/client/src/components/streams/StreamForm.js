import '../scss/StreamForm.scss';
import React from 'react';
import { Form, Field } from 'react-final-form';

const StreamForm = props => {
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return <div className="error--text">{error}</div>;
    }
  };

  const renderInput = ({ input, label, meta }) => {
    const className = `field__input ${
      meta.error && meta.touched ? `error--input` : ''
    }`;

    return (
      <div className="field">
        <label className="field__label">{label}</label>
        <input className={className} {...input} autoComplete="off" />
        <span className="input__style"></span>
        {renderError(meta)}
      </div>
    );
  };

  const onSubmit = formValues => {
    props.onSubmit(formValues);
  };

  return (
    <Form
      initialValues={props.initialValues}
      onSubmit={onSubmit}
      validate={formValues => {
        const errors = {};

        if (!formValues.title) {
          errors.title = 'You must enter a title';
        }

        if (!formValues.description) {
          errors.description = 'You must enter a description';
        }

        return errors;
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className="stream-form__form">
          <Field name="title" component={renderInput} label="Enter Title" />
          <Field
            name="description"
            component={renderInput}
            label="Enter Description"
          />
          <button className="field__button">Submit</button>
        </form>
      )}
    />
  );
};

export default StreamForm;
