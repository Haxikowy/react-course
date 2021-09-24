import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { deleteStream } from '../../actions';

const StreamDelete = props => {
  const onDismiss = () => {
    history.goBack();
  };

  const onPrimaryClick = () => {
    props.deleteStream(props.match.params.id);
  };

  const onSecondaryClick = () => {
    history.goBack();
  };

  const actions = (
    <>
      <button
        onClick={onPrimaryClick}
        className="modal__button modal__button--alert">
        Delete
      </button>
      <button onClick={onSecondaryClick} className="modal__button">
        Cancel
      </button>
    </>
  );

  return (
    <div>
      <Modal
        config={{
          title: 'Delete stream',
          text: 'Are you sure you want to delete this stream?',
          actions,
          onDismiss,
        }}
      />
    </div>
  );
};

export default connect(null, { deleteStream })(StreamDelete);
