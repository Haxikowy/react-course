import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div className="stream-create">
        <h1
          style={{
            marginBottom: '.5em',
            textAlign: 'center',
            color: 'hsl(265, 100%, 15%)',
          }}>
          Create a stream
        </h1>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
