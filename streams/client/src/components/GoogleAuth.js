import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '751837045678-27k5kbsru1ge6fb51nbhmsa4ht6h76kb.apps.googleusercontent.com',
          scope: 'profile email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    isSignedIn
      ? this.props.signIn(this.auth.currentUser.get().getId())
      : this.props.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <div
          onClick={this.auth.signOut}
          className="header--list__link header--list__avatar">
          <img
            alt="current user avatar"
            src={this.auth.currentUser.get().getBasicProfile().getImageUrl()}
          />
        </div>
      );
    } else {
      return (
        <div onClick={this.auth.signIn} className="header--list__link">
          Sign In
        </div>
      );
    }
  }

  render() {
    return <React.Fragment>{this.renderAuthButton()}</React.Fragment>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
