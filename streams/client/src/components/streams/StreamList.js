import '../scss/StreamList.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (this.props.currentUserId === stream.userId) {
      return (
        <div className="stream-list__buttons col">
          <Link
            to={`/streams/edit/${stream.id}`}
            className="stream-list__button stream-list__button-secondary">
            edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="stream-list__button">
            delete
          </Link>
        </div>
      );
    } else {
      return null;
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <li key={stream.id} className="stream-list__item">
          <div className="col">
            <span className="stream-list__icon">🎥</span>
            <div className="stream-list__content">
              <Link to={`/streams/${stream.id}`} className="stream-list__title">
                {stream.title}
              </Link>
              <p className="stream-list__description">{stream.description}</p>
            </div>
          </div>
          {this.renderAdmin(stream)}
        </li>
      );
    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <Link to="/streams/new" className="create__button">
          Create a stream
        </Link>
      );
    }
  }

  render() {
    return (
      <div className="stream-list__container">
        <h1 className="page__title">Streams</h1>
        <ul className="stream-list">{this.renderList()}</ul>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
