import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  render() {
    return <div className="stream-list">StreamList</div>;
  }
}

const mapStateToProps = {};

export default connect(null, { fetchStreams })(StreamList);
