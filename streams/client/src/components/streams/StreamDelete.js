import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onButtonClick = () => {
    if (
      parseInt(this.props.currentUserId, 10) !==
      parseInt(this.props.stream.userId, 10)
    ) {
      console.log("You haven't permission to do that.");
    } else {
      this.props.deleteStream(this.props.stream.id);
    }
  };

  renderActions = () => {
    return (
      <>
        <button
          onClick={this.onButtonClick}
          className="modal__button modal__button--alert">
          Delete
        </button>
        <Link to="/" className="modal__button">
          Cancel
        </Link>
      </>
    );
  };
  render() {
    return (
      <Modal
        config={{
          title: 'Delete stream',
          text: 'Are you sure you want to delete this stream?',
          actions: this.renderActions(),
          onDismiss: () => history.push('/'),
        }}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
    currentUserId: state.auth.userId,
  };
};

export default connect(mapStateToProps, { deleteStream, fetchStream })(
  StreamDelete
);
